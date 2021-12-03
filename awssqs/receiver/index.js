import AWS from 'aws-sdk';

// import the consumer
import {Consumer} from 'sqs-consumer';

 

// lets configure the AWS SDK for the current application, so that
// it can connect to SQS 

AWS.config.update({
     secretAccessKey:' ',
     accessKeyId: '',
    region:'ap-south-1'
});

// set the queue URL

const ququeURL = 'https://sqs.ap-south-1.amazonaws.com/472804039072/myquque';

// Create an instance of SQS
// set apiVersion to Access the SQS Service 
const sqs = new AWS.SQS({apiVersion:"2012-11-05"});

// Create a Consumer to receive the message
const consumer = Consumer.create({
    queueUrl:ququeURL,
    handleMessage: async(message)=>{
        // process the receive message
        console.log('====================================');
        console.log(`Received Message = ${JSON.stringify(message)}`);
        console.log('====================================');
    },
    sqs:sqs, // SQS Instance
    batchSize:10 // the number of messages to be read in a batch
});
// also define an error Condition for consuming the SQS
consumer.on('error',(error)=>{
    console.log('====================================');
    console.log(`Error Occurred Consuming SQS = ${error}`);
    console.log('====================================');
});


// it is recommended that subscribe to the error that may occur while processing message
  
consumer.on('processing_error',(error)=>{
    console.log('====================================');
    console.log(`Error Occurred while processing messages = ${error}`);
    console.log('====================================');
});

// Lests start the Consumer
consumer.start();