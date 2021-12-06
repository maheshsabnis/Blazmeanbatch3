const express = require('express');
const axios = require('axios');
const redis = require('redis');

const port = process.env.PORT || 7006;

const instance = express();

// 1. create a redis client and connect in on the port (Note: Tyhe Redis MUST be running)
const client = redis.createClient({port: 6379});

// 2. Check for any connection Error e.g. The Cache Server is not running

client.on('error', (error)=>{
    console.error(`in error ${error}`);
});

// 3. Make a get call to REST API and Fetch the data
instance.get("/api/products", async(req,resp)=>{
    console.log('in get');
    try{
        // check if the cache jas a specific Key
        let key = client.keys("Products");
        if(key) {
            // 4. get the data from the cache
            // error: The cache Read Error
            // data: The data from the cache
            client.get("Products", async(error,data)=>{
                if(data){
                    console.log('====================================');
                    console.log('Data is being read from cache');
                    console.log('====================================');
                    // 5. respond the data from the cache
                    return resp.status(200).send({
                        message: `The Data is Read from Cache`,
                        records: JSON.stringify(data)
                    });    
                } else {
                    // 6. make call to REST API and get the data
                    
                    const axiosResponse = await axios.get("https://apiapptrainingnewapp.azurewebsites.net/api/Products");

                    // 7. First Add Data in Cache and then respond to client
                    client.setex("Products", 60, JSON.stringify(axiosResponse.data));
                    
                    // 8. Respond to the client
                    return resp.status(200).send({
                        message: `The Data is Read from External REST API `,
                        records: JSON.stringify(axiosResponse.data)
                    }); 
                }
            });
        }
    }catch(e){
        console.log('====================================');
        console.log(`Error while Using RedisCache in the Node.js App ${e}`);
        console.log('====================================');
    }
});



instance.listen(port, ()=>{
    console.log(`Server Starts on port ${port}`);
});