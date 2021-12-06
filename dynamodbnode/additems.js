import AWS from "aws-sdk";
import fs from 'fs';
// 1. Authenticate against the AWS and Access the DynamoDB
AWS.config.update({
  secretAccessKey: "",
  accessKeyId: "",
  region: "ap-south-1",
  endpoint: "https://dynamodb.ap-south-1.amazonaws.com", // an endpoint to connect to dynamodb https://dynamodb.[region].amazonaws.com
});

// 2. Lets define an instance of th DynamoDB DocumentClient
let dynamoDbDocClient = new AWS.DynamoDB.DocumentClient;
// dynamoDBClient.put();
// dynamoDbDocClient.get();
 dynamoDbDocClient.delete();
// dynamoDbDocClient.update();

// 3. read the file from which data is read and to be added in DynamoDb Table
let fileData = fs.readFileSync('./employees.json');
// 4. parse this data in JSON for so that it will be used for writing into the file
let employees  =JSON.parse(fileData.toString());

// 5. iterate over the employees data and add each record into the table

employees.forEach((emp)=>{
    dynamoDbDocClient.put({
        TableName: "Employees",
        Item:emp // record to be added
    },(error,data)=>{
        if(error) {
            console.log(`Error Occurred While addign data in table ${error.message}`);
            return;
        }
        console.log(`records are added Successfully ${data.ConsumedCapacity}`);
    });
});



