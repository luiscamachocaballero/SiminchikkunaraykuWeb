# Project 5 - Cloud DevOps Engineer Capstone Project



## About Project: 

> I created a CI/CD pipeline for a website that deploys to a cluster in AWS EKS which is Blue/Green Deployment. The images below shows the stages of the pipelines. In fact I used not only one, but two pipelines. The Jenkinsfile of the first pipeline is into the folder "cluster". I didn't found the way to run both pipelines located in the same repository, then the Jenkinsfile in "cluster" was run from another repository. 

![img-1](capstoneImages/PipelinesDescription.png)


## Run the project:
```sh

1. In AWS Launch the EC2 t2.micro for the free tier, pick “Ubuntu 18.04 LTS amd64"

2. make sure that the IAM user that you are using has all of the correct permissions.

3. Install java JDK

4. Install Jenkins On Ubuntu

5. Set up Jenkins, install the blue ocean and pipeline-aws plugins in jenkins

6. Create account in docker.com

7. Register AWS and Docker credentials into Jenkins (see folder capstoneImages)

8. Install docker. 
    sudo apt-get update
    sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo apt-key fingerprint 0EBFCD88
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
    sudo apt-get update
    sudo apt-get install docker-ce docker-ce-cli containerd.io
    sudo usermod -a -G docker jenkins
    sudo /etc/init.d/jenkins restart
   
9. Install the necessary dependencies to deploy your cluster with AWS EKS. Follow this tutorial https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html. 

10. Create in Jenkins the credentials for AWS

## The files included are:
```sh
* /capstoneImages : Screenshot the result of deploy.
* /cluster : it includes CloudFormation Script of Cluster Pipeline Jenkinsfile 
* Jenkinsfile : Deployment Script of Containers Pipeline Jenkinsfile
* Dockerfile : Dockerfile for building the image 
* green-controller.json : Create a replication controller green pod
* green-service.json : Create the green service
* blue-controller.json : Create a replication controller blue pod
* blue-service.json : Create the blue service
* index.html : Web site Index file.
```

```


## Project Tasks:

* Working in AWS
* Using Jenkins to implement Continuous Integration and Continuous Deployment
* Building pipelines
* Working with CloudFormation to deploy clusters
* Building Kubernetes clusters
* Building Docker containers in pipelines

Please look at the recomendations in this links:
* https://medium.com/@andresaaap/capstone-cloud-devops-nanodegree-4493ab439d48
* https://medium.com/@andresaaap/jenkins-pipeline-for-blue-green-deployment-using-aws-eks-kubernetes-docker-7e5d6a401021

# SiminchikkunaraykuWeb


![screenshot](images/main.PNG)

The site is open source and is a web page to save the native communities from Peru.

### What do we do?

The mission of Siminchikkunarayku is to preserve and protect languages at risk of extinction, especially languages and to promote the public use of these languages through the creation and/or use of information and communication technologies,especially the development of computational portability. The vision of Siminchikkunarayku is that all communities of language speakers at risk of extinction, especially the South American languages, have the technological means to support and spread their language. If we lose our tongues we will lose a great treasure, on the contrary if our tongues flourish they will bring great benefits to the entire Nation, products and services valued at various points of GDP. As if that were not enough, the development of our languages will consolidate national inclusion and cohesion, ensuring sustainable and peaceful human development.

### How do we do it?

We bring together communities, researchers, writers, artists, engineers and universities from all over South America to gather and create the largest multimedia content to computationally process our ancient indigenous languages for the benefit of all.

### Who do I talk to?

Rodolfo Zevallos rjzevallos.salazar@gmail.com and Luis Camacho Caballero camacho.l@pucp.pe

