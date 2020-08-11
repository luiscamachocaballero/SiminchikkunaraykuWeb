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
        	stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
            		docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                		app.push("${env.BUILD_NUMBER}")
                		app.push("latest")
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
