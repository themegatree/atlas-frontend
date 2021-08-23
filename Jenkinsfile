pipeline {
  agent any
  tools { nodejs "nodejs" }
  environment {
    CI = 'true'
    CHROME_BIN = '/bin/google-chrome'
  }
  stages {
    stage('Dependencies') {
        steps {
            sh 'npm ci'
        }
    }
    stage('Build') {
        steps {
            sh 'npm run build'
        }
    }
    stage('Unit Tests') {
      steps {
        script {
          sh 'npm test'
        }
      }
    }
    stage('pre Feature Tests') {
      steps {
        script {
          sh 'npm install wait-on'
          sh 'npm install pm2'
          sh 'npm install mocha mochawesome-merge mochawesome-report-generator'
          sh 'npx pm2 start npm -- start'
          sh 'npx wait-on http://localhost:3000'
        }
      }
    }
    stage('Feature Tests') {
      steps {
        script {
          sh 'npx cypress run --reporter mochawesome --reporter-options "reportDir=cypress/report/mochawesome-report,overwrite=false,html=false,json=true,timestamp=mmddyyyy_HHMMss"'
          echo 'merging reports'
          sh 'npx mochawesome-merge cypress/report/mochawesome-report/mochawesome*.json > cypress/report/mochawesome.json'
        }
      }
    }
  }
  post {
    always {
      echo 'stopping local server'
      sh 'npx pm2 kill'
      cleanWs()
    }
  }
}
