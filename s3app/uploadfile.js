import AWS from 'aws-sdk';

import fs from 'fs';
// 1. Set the Bucket Name
const bucket_name = "blaze-b3-bucket";

// 2. Lets Authenticate against the AWS

const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey:''
});

// 3. Upload the file to S3

const UploadFile=(image)=>{
    // 3a. Read the file

    const fileData =  fs.readFileSync(image);

    
    // 3b. Upload
    s3.upload({
        Bucket: bucket_name,
        Key: `myfile.png`, // the file that will be created in S3
        Body: fileData // the file that will added in request body
    },(error,data)=>{
        if(error){
            console.log(`Error Occurred while creating Bucket ${error.message}`);
        }else {
            console.log(`Bucket is created Successfully ${data.Bucket}`);
        }
    });

};


// 4. Pass file top upload
UploadFile('./myfile.png');


