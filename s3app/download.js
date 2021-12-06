import AWS from 'aws-sdk';

import fs from 'fs';
// 1. Set the Bucket Name
const bucket_name = "blaze-b3-bucket";

// 2. Lets Authenticate against the AWS

const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey:''
})

// 3. code for download
const download=()=>{
    // the S3 Bucket will provide the file top download as a 'stream'
    // the 'stream' will be a continuous set of Bytes received
    // the Node.js MUSt create a writable stream (an object that will)
    // organize the received bytes in proper order
    // then the stream MUST 'piped' all ordered bytes to create a new binary file  

    // 3.a. Lets a Create a Writable Stream and give a name to it
    let outStream = fs.createWriteStream('downloadedimage.png');

    // 3.b. lets start receiving stream from S3
    let receiveStream = s3.getObject({
        Bucket: bucket_name,
        Key: 'myfile.png', // the resource from the Bucket
    }).createReadStream(); 
    // the readable stream that is organized in an order by the Node.js in its Runtime  
    // 3.c. Lets pipe the received Readable Stream into the Writable Stream so that the
    // new file will be created
    receiveStream.pipe(outStream);
    console.log(`File is downloaded successfully`); 
}; 

download();