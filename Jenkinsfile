pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'First test Pipeline Editor'
        sh 'sh run_build_script.sh'
      }
    }

    stage('Linux Tests') {
      parallel {
        stage('Linux Tests') {
          steps {
            echo 'Run linux tests'
            sh 'sh run_linux_tests.sh'
          }
        }

        stage('Windows Test') {
          steps {
            echo 'Run Windows tests'
          }
        }

      }
    }

    stage('Deploy Staging') {
      steps {
        echo 'Deploy to staging environment'
        input 'ok to deploy to production?'
      }
    }

    stage('Deploy Production') {
      steps {
        echo 'Deploy to production'
      }
    }

  }
}