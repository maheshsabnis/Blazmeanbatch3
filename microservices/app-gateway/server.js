const path = require('path');
const gateway = require('express-gateway');

// load the Configuration and run the gateway
gateway()
  .load(path.join(__dirname, 'config'))
  .run();
