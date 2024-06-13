pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                dir('back') {
                    script {
                        sh 'mvn clean package'
                    }
                }
            }
            post {
                success {
                    archiveArtifacts artifacts: 'back/target/*.jar', allowEmptyArchive: true
                }
            }
        }
        stage('Test') {
            steps {
                dir('back') {
                    script {
                        sh 'mvn test'
                    }
                }
            }
        }
    }
}     
