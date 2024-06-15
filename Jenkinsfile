pipeline {
    agent any

    tools {
        jdk 'JDK-19'
        maven 'Maven'
    }
    stages {
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
