pipeline {
    agent any


    environment {
        // Define the directory where backups will be stored
        BACKUP_DIR = '/var/backups/mongodb'
    }
    tools {
        jdk 'JDK-19'
        maven 'Maven'
    }
    stages {
        stage('Prepare Backup Filename') {
            steps {
                script {
                    // Generate the timestamped filename if DUMP_FILE is not provided
                    if (!params.DUMP_FILE) {
                        def timestamp = sh(script: 'date +%Y_%m_%d_%H%M', returnStdout: true).trim()
                        env.DUMP_FILE = "data_dump_${timestamp}.tar.gz"
                    } else {
                        env.DUMP_FILE = params.DUMP_FILE
                    }
                    echo "Using dump file name: ${env.DUMP_FILE}"
                }
            }
        }
        stage('Dump MongoDB') {
            steps {
                script {
                    try {
                        // Ensure the database is stopped before starting it
                        sh "docker-compose -f docker-compose.db.yml down --remove-orphans"
                        // Start only the database
                        sh "docker-compose -f docker-compose.db.yml up -d --remove-orphans"
                        // Dump the database
                        sh "docker-compose -f docker-compose.db.yml exec -T database mongodump --out /data/db/backup"
                        sh "docker-compose -f docker-compose.db.yml exec -T database tar -cvzf /data/db/backup.tar.gz /data/db/backup"
                        // Copy dump to host
                        sh "docker cp \$(docker-compose -f docker-compose.db.yml ps -q database):/data/db/backup.tar.gz ./backup.tar.gz"
                    } catch (Exception e) {
                        // Log the error but do not fail the build
                        echo "Database dump failed: ${e.getMessage()}"
                    } finally {
                        // Ensure the database is stopped
                        sh "docker-compose -f docker-compose.db.yml down"
                    }
                }
            }
        }
        stage('Copy Dump to Backup Directory') {
            steps {
                script {
                    // Ensure the backup directory exists
                    sh "mkdir -p ${BACKUP_DIR}"
                    // Copy the dump file to the backup directory with the dynamic name
                    sh "cp ./backup.tar.gz ${BACKUP_DIR}/${env.DUMP_FILE}"
                }
            }
        }
        stage('Compile') {
            steps {
                dir('Back') {
                    script {
                        sh 'mvn clean package'
                    }
                }
            }
            post {
                success {
                    archiveArtifacts artifacts: 'Back/target/*.jar', allowEmptyArchive: true
                }
            }
        }
        stage('Test') {
            steps {
                dir('Back') {
                    script {
                        sh 'mvn test'
                    }
                }
            }
        }
        stage('Build Backend') {
            steps {
                script {
                    // Ensure the application is stopped before starting it
                    sh "docker-compose down --remove-orphans"
                    // Build the new backend image
                    sh "docker-compose build app"
                }
            }
        }
        stage('Deploy Application') {
            steps {
                script {
                    // Deploy both app and database
                    sh "docker-compose up -d --remove-orphans"
                }
            }
        }
    }
}     
