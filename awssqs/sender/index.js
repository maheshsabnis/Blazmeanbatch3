import express from 'express';
import AWS from 'aws-sdk';

const instance = express();

instance.use(express.json());

// lets configure the AWS SDK for the current application, so that
// it can connect to SQS 

AWS.config.update({
     secretAccessKey:'',
     accessKeyId: '',
    region:'ap-south-1'
});

// set the queue URL

const ququeURL = 'https://sqs.ap-south-1.amazonaws.com/472804039072/myquque';

// Create an instance of SQS
// set apiVersion to Access the SQS Service 
const sqs = new AWS.SQS({apiVersion:"2012-11-05"});

// the post method to acceopt data from the client

instance.post("/api/emp",(req,resp)=>{
    // create an object that will be serialized in SQS Message
    let emp = {
        EmpNo: req.body.EmpNo,
        EmpName: req.body.EmpName
    };

    // lets send message to SQS Asynchronously
    // each message will have message attributes with its type
    // each attribute type is string
    // The MessageBody will actually contains the data
    let queueMessage = sqs.sendMessage({
        MessageAttributes:{
            "EmpNo":{
                DataType: "String",
                StringValue: emp.EmpNo
            },
            "EmpName":{
                DataType: "String",
                StringValue: emp.EmpName
            },
        },
        MessageBody: JSON.stringify(emp),
        QueueUrl: ququeURL
    }).promise();

    // Subscribe to the Promise and check if the message is send
    queueMessage.then((data)=>{
        console.log(`Data is Send Successfully ${data.MessageId}`);
        resp.status(200).send(`Data is Send to Queue Successfully ${data.MessageId}`);
    }).catch((error)=>{
        console.log(`Error in sending message ${error}`);
    });
});

instance.listen(9807,()=>{
    console.log('====================================');
    console.log('Server Started on port 9807' );
    console.log('====================================');
});