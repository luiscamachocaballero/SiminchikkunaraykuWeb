# Project 5 - Cloud DevOps Engineer Capstone Project



## About Project: 

> I created a CI/CD pipeline for a website that deploys to a cluster in AWS EKS which is Blue/Green Deployment. The images below shows the stages of the pipelines. In fact I used not only one, but two pipelines. The Jenkinsfile of the first pipeline is into the folder "cluster". I didn't found the way to run both pipelines located in the same repository, then the Jenkinsfile in "cluster" was run from another repository. 

![img-1](capstoneImages/PipelinesDescription.png)


## Run the project:
```sh
* Please follow to steps of screenshot in Images-of-result-deploy folder.

Set up Jenkins and the necessary packages

    In AWS Launch the EC2 t2.micro for the free tier, pick “Ubuntu 18.04 LTS amd64
    Connect your instance using SSH. This guide is helpful https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html

Example command:

ssh -i /path/my-key-pair.pem ubuntu@ec2-198-51-100-1.compute-1.amazonaws.com

You need to make sure that the IAM user that you are using has all of the correct permissions.

3. Install java JDK

4. Install Jenkins On Ubuntu

5. Set Up Jenkins

6. Install the Blue Ocean plugin in jenkins

7. Install the pipeline-aws plugin in jenkins

8. Install docker. You can use this tutorial for linux ubuntu https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04

9. Install the necessary dependencies to deploy your cluster with AWS EKS. Follow this tutorial https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html. Please look at the recomendations in this guide question 14 https://medium.com/@andresaaap/capstone-cloud-devops-nanodegree-4493ab439d48

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


* https://medium.com/@andresaaap/capstone-cloud-devops-nanodegree-4493ab439d48
* https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html
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

