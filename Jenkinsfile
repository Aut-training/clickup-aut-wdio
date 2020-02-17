pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                bat 'git checkout dev'
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    bat 'npm test'
                }
            }
        }
        stage('Reports') {
            steps {
                echo 'Reporting....'
            }
        }
    }
}
