# Microservices Deployment Strategies or Practices
1. Why we ar using Microservices?
    - High-Available, Performance-Optimized, Version-supportive (CI/CD), Mission-Critical (No-Down-time and Highly-Accessible) Apps 
    - Isolated Services those are developed and deployed as per the requirements of the Domain
    - Implementing each Service in Isolation and deployed independently 
    - Independent Technology Stack that is chosen based on the Implementation requirement
        - Node.js, Java, .NET, etc.
2. Plan for deployment    
    - Capital Expenditure
        - Investment in implementing the Microservices Bases App
        - Choosing an Environment
            - On-Premises
            - Cloud  
    - Operational Expenditure
        - Hardware Utilization
            - Servers aka Nodes (Cost Increasing factor)
                - Decide number of dedicated servers for the app
            - CPU Cost (Cost Increasing factor)
                - CPU will be used for Requests and Responses for Execution
            - Memory Cost (Cost Increasing factor)
                - Memory Allocation is Done for the App
                - There are Memory Management Features available to those the app MUST subscribe  
            - Network Resources (Cost Increasing factor but not considerable)
                - Uses when there are calls
            - Disk Utilization (Cost Increasing factor but not considerable)
                - Once the App is deployed the Disk space is allocated
        - Software Costing
            - Node Cost for Deployment because of Images
            - Database Read/Write Cost
                - Transaction Cost for Database
            - Cloud Services
                - Distributes Cache
                - Messaging
                - File Storages Read/Write
                - Object Storage Read/Write
3. Suggestions for Application Deployment on Cloud
    - Think of Serverless deployment for the application
        - The cost will be calculated only Execution time /  processing time
        - One of the suggestion for Microservices apps
    - Use the K8s Cluster on the Cloud
        - Plan for Nodes
        - Plan for Replicas        
4. Offerings by AWS
    - AWS Lambda for Serverless Deployment
        - Recommended for Application those are executed only on-demand
        - The ideal for operations like
            - REST APIs
            - Background Resource Access e.g. S3, SQS, Cache, etc.
        - This provides an Application Gateway by default for REST APIs
        - Simple Deployment using Serverless Configurations
    - AWS Elastic Kubernetes Service (EKS)
        - K8s Service Offered by AWS
        - Provides a Single Node Cluster by default, Nodes can be increased
        - Uses following Features behind the scene
            - Uses AWS Elastic Container Registry (ECR) 
                - Repository where all images are kept for deployment purpose (conceptually same as Docker HUB)
                - The image for Microservice is fetched from ECR and deployed in EKS
            - Uses EC2 Instance(s) for High Availability of Microservice App
            - The EKS is configured using Availability Zone (AZ)
                - High Availability
                - AZ-a with Public and Private Security Group and EC 2
                - AZ-b with Public and Private Security Group and EC 2
                - Total 4 EC2 Instances (COST Increasing Factor)
            - The POD Deployment is done with NodePort     
            - The Securitygroup MUST be configured for Public Access over the Http Protocol
5. Deploying app in EKS using following steps    
    - https://github.com/maheshsabnis/ekddemoworking.git
6. We need EC 2 Instances for the Cluster Creation, to work with it use the CloudFormation Template
    - This is an offering from AWS tio Create an EKS Cluster with its dependencies as follows
        - Availability Zones
            - Public
                - AZ-a and AZ-b
            - Private  
                - AZ-a and AZ-b
        - EC2 instances with its Size
        - Network Security Group aka Security Group for the Communication from Outside
        -  CIDR 
            - Classless Inter-Domain Routing
                - reserved IPs for Public and Private Subnet communication used by EKS Cluster        
7. AWS Lambda
    - Serverless Deployment of Service on AWS
    - Pay-for-use
        - When the resources is executed the the Computation and Memory Utilization is Calculated and the charges are applied based on it                 
    - It is a concept where we deploy the Microservice and the AWS will charge only when the service is
        - requested
        - executed
        - responded
    - Used Cases for Lambda
        - Taking backup of Data from RDS to DynamoDB
        - Interacting with S3 for Binary Resource Management (Compressing and Uncompressing Files)     
        - Background Processing of SQS Messages
    - Triggers (events) are the key for Lambda
        - Start executing when HTTP request is received
        - Start reading message from SQS when the message is received 
    - Creating Lambda using Node.js
        - aws-sdk
        - serverless-http
            - An Event package that will listen to the Http request
            - npm install -g serverless-http
                - This will provide the serverless utility for deployment on AWS
        - Create serverless.yml file     
            - contain the configuration for deploying the Node.js app as Lambda
                - Sections for deployment 
                    - 'service': the name of the Lambda Service
                    - 'provider': the deployment provider with following information
                        - 'name': name of the provider i.e. 'aws'
                        - 'runtime': the runtime that is used to execute the server e.g. 'nodejs14.x'
                        - 'stage': the deployment stage on Cloud 'dev' or 'prod'
                        - 'region': the region for the deployment           
                    - 'function': the serverless execution on event (the trigger)
                        - 'app': the application definition
                                - 'handler': the code which is supposed to be execute
                                - 'events': the type of events when they occur start running the function  

