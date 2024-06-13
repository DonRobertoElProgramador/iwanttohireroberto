pipeline {
    agent any
    stages {
        stage('Build') {
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
    }
}     
