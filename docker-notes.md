# Working With Microservices

1. Docker 
    - Download the Docker desktop
    - OS MUST support Hardware based Virtualization
2. Use the standard Docker Images
    - https://hub.docker.com
    - We have various standard images to create the image for our application
3. The Application MUST have following 2 files
    - dockerfile
        - Contains Script for Creating an Image for our application
    - .dockerignore
        - The file that contains the configuration that will not be used when the docker image is created         
4. Docker Commands for Login and listing images and containers
    - Uses the Docker CLI
        - docker
    - Login on docker.com
        - docker login
            - Ask the User Name and Password
            - This is MUSt for Pushing and Pulling Images to and from https://hub.docker.com
        - docker logout
            - Logout from Docker
    - List All docker images on the local Machine
        - docker images
    - Each Image Runs into its Container
    - Command to List all Containers
        - docker ps
    - Command to List all Running Containers, they ar running and using resources like CPU, Memory and Network
        - docker ps -a
5.  Docker Commands to Build images, Running Images inside the container
    - Build an image, This Command MUST run from the path where 'dockerfile' is present. The command will read all configurations e.g. Base Image, Files to Copy, Dependencies to install, Port to expose, command to run the application, etc. from the dockerfile
        - docker build . -t [IMAGE-NAME]:[TAG]
            - The . means the current path to read dockerfile
            - The -t, the tag name, the name for image and its version
            - The IMAGE-NAME, the name of the image. This MUST be in lower case    
            - The TAG, this is the Version Name, Version Number or any other Unique value
        - e.g.
            - docker build . -t myimage:v1
    - Run the Image
        - Running the image will create a container. The image will be loaded into the container and then it will be executed
            - docker run  -p [PORT-ON-LOCAL-MACHINE]:[PORT-EXPOSED-BY-CONTAINER] [IMAGE-NAME]:[TAG] --name=[CONTAINER-NAME-IN-WHICH-IMAGE-WILL-BE-LOADED]
                - If the the image is having Web App /  REST API then the container will expose the port so that http call will be accepted by it so we need to map the 'PORT-ON-LOCAL-MACHINE' to the 'PORT-EXPOSED-BY-CONTAINER' using '-p'   
                - The '--name' is the CONTAINER-NAME, this MUST be lower case
        - Make the container running in background Continuously
            - docker run -d -p [PORT-ON-LOCAL-MACHINE]:[PORT-EXPOSED-BY-CONTAINER] [IMAGE-NAME]:[TAG] --name=[CONTAINER-NAME-IN-WHICH-IMAGE-WILL-BE-LOADED]  
    - Stop Container
        - docker stop [CONTAINER-NAME] | [CONTAINER-ID]
            - Unload the container and release resources e.g. CPU, Memory, Port, etc.
    - remove Container
        - docker rm   [CONTAINER-NAME] | [CONTAINER-ID]
            - Container MUST be stopped before removing it
    - Remove Image
        - docker rmi [IAMGE-NAME]:[TAG] | [IMAGE-ID]
            -  Container MUST be stopped and deleted before removing image                                    
    - Pushing Image to Docker repository
        - https://hub.docekr.com
        - Tag the image using respository-name
            - e.g. is the repository name is 'xyz' the tag the image as 
                - docker tag [IMAGE-NAME]:[TAG] xyz/[IMAGE-NAME]:[TAG]
        - Use the PUSH command
            - docker push xyz/[IMAGE-NAME]:[TAG]
                - The push command will read the repository name from the image name, then connect to repository and then push the image in the repository                  
       - Pull image from the repository 
        - docker pull [IMAGE-NAME]:[TAG]           