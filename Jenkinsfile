pipeline {
    agent any
    stages {
        stage('Load and Execute External Script') {
            steps {
                script {
                    // Load and execute the external Groovy script
                    def externalScript = load 'jobs/myScript.groovy'
                    // Optionally, call methods from the loaded script
                    externalScript.someMethod()
                }
            }
        }
    }
}