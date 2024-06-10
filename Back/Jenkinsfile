pipeline {
    agent any
    stages {
        stage('Load and Execute External Script') {
            steps {
                dsl {
                    text('''
                        job('hello_world_job') {
                            steps {
                                shell('echo "Hello, World!"')
                            }
                        }
                    '''.stripIndent())
                }
            }
        }
    }
}