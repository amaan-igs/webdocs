pipeline {

    agent { label "aws" }
    
    stages {
        stage('Git: Code Checkout') {
            steps {
                echo "Cloning the repository..."
                git url: "https://github.com/amaan-igs/webdocs.git", branch: "main"
            }
        }
        
        stage('Docker Build') {
            steps {
                echo "Building project with Docker..."
                sh "docker build -t webdocs:latest ."
            }
        }
        
        stage('Docker Hub Push') {
            steps {
                echo "Pushing to Dockerhub..."
                withCredentials([usernamePassword(credentialsId:"HubDocker", 
                passwordVariable:"HubDockerPass", usernameVariable:"HubDockerUser")]){
                sh "docker login -u ${env.HubDockerUser} -p ${env.HubDockerPass}"
                sh "docker image tag webdocs:latest ${env.HubDockerUser}/webdocs:latest"
                sh "docker push ${env.HubDockerUser}/webdocs:latest"
                }
            }
        }

        stage('Docker Compose') {
            steps {
                echo "Launching services with docker-compose..."
                sh "docker-compose up -d"
            }
        }
    }  
}

// Declarative Pipeline for building testing and deploying to dockerhub.