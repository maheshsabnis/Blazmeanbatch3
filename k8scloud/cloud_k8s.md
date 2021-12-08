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

                 
