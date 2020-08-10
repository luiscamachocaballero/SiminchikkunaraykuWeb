pipeline {
	agent any
	stages {
		
		stage('Build Docker Image') {
			steps {
				withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD']]){
					sh '''
						docker build -t kamachikuq/capstone .
					'''
				}
			}
		}

		stage('Push Image To Dockerhub') {
			steps {
				withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD']]){
					sh '''
						docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD
						docker push kamachikuq/capstone
					'''
				}
			}
		}

		stage('Set current kubectl context') {
			steps {
					sh '''
						kubectl config use-context arn:aws:eks:us-east-1:142977788479:cluster/capstonecluster
					'''
			}
		}

		stage('Deploy blue container') {
			steps {
          sh '''	
            kubectl apply -f ./blue-controller.json
					'''
			}
		}

		stage('Deploy green container') {
			steps {
					sh '''
						kubectl apply -f ./green-controller.json
					'''
			}
		}

		stage('Create the service in the cluster, redirect to blue') {
			steps {
					sh '''
						kubectl apply -f ./blue-service.json
					'''
			}
		}

		stage('Wait user approve') {
            steps {
                input "Ready to redirect traffic to green?"
            }
        }

		stage('Create the service in the cluster, redirect to green') {
			steps {
					sh '''
						kubectl apply -f ./green-service.json
					'''
			}
		}

	}
}
