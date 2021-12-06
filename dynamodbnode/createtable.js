import AWS from "aws-sdk";

// 1. Authenticate against the AWS and Access the DynamoDB
AWS.config.update({
  secretAccessKey: "",
  accessKeyId: "",
  region: "ap-south-1",
  endpoint: "https://dynamodb.ap-south-1.amazonaws.com", // an endpoint to connect to dynamodb https://dynamodb.[region].amazonaws.com
});

// 2. Lets define an instance of th DynamoDB
let dynamoDb = new AWS.DynamoDB();

// 3. Lets create a function to create a table
// create table with TableName, KeySchema (Provide PartitionKey and SortKey wits its datatypes )
// Attribute Definitions and ProvisionThroughput i.e. Read and Write Capacity Units
const createTable = () => {
  dynamoDb.createTable({
    TableName: "Employees",
    KeySchema: [
      {
        AttributeName: "DeptName",
        KeyType: "HASH", // The PartitionKey
      },
      {
        AttributeName: "EmpNo",
        KeyType: "RANGE", // The SortKey
      },
    ],
    // Attributes in Table, They MUST match with the KeySchema so that the Table will be created
    AttributeDefinitions: [
      {
        AttributeName: "DeptName",
        AttributeType: "S",
      },
      {
        AttributeName: "EmpNo",
        AttributeType: "S",
      },
    ],
    // The Read/Write Provision Units (The default is 5, Think and Plan on Cost)
    ProvisionedThroughput: {
        ReadCapacityUnits:5, WriteCapacityUnits:5
    }
  }, (error,data)=>{
      if(error) {
          console.log(`Error Occurred While Creating Table ${error.message}`);
          return;
      }
      console.log(`Table is created Successfully ${data.TableDescription}`);
  });
};

// 4. calla function
createTable();
