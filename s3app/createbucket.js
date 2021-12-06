import AWS from 'aws-sdk';

// 1. Set the Bucket Name
const bucket_name = "blaze-b3-bucket";

// 2. Lets Authenticate against the AWS

const s3 = new AWS.S3({
    accessKeyId: '',
    secretAccessKey:''
});

// 3. Create a Bucket

s3.createBucket({
    Bucket:bucket_name,
    CreateBucketConfiguration: {
        // set the location of the Bucket
        LocationConstraint: 'ap-south-1'
    }
}, (error,data)=>{
    if(error){
        console.log(`Error Occured while creating Bucket ${error.message}`);
    }else {
        console.log(`Bucket is created Successfully ${data.Location}`);
    }
    
}); 