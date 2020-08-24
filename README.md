# Project 5 - Cloud DevOps Engineer Capstone Project

## About Project: 
I created a CI/CD pipeline for a website that deploys to a cluster in AWS EKS which is Blue/Green Deployment. The images below shows the stages of the pipelines. In fact I used not only one, but two pipelines. The Jenkinsfile of the first pipeline is into the folder "cluster". I didn't found the way to run both pipelines located in the same repository, then the Jenkinsfile in "cluster" was run from another repository. 

![img-1](capstoneImages/PipelinesDescription.png)


## Run the project:

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
   
9. Install the necessary dependencies to deploy your cluster with AWS EKS. Follow this tutorial 
    https://docs.aws.amazon.com/eks/latest/userguide/getting-started-eksctl.html. 

10. Build commits to pipelines, review logs and correct bugs

## Look at the recommendations in these links:
* https://medium.com/@andresaaap/capstone-cloud-devops-nanodegree-4493ab439d48
* https://medium.com/@andresaaap/jenkins-pipeline-for-blue-green-deployment-using-aws-eks-kubernetes-docker-7e5d6a401021



