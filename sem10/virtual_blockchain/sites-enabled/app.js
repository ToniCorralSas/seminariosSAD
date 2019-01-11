const express = require('express'), 
  bodyParser = require('body-parser');
const app = express()
var fs = require('fs');

app.use(bodyParser.json())

initiateMultichain = function() {
  let multichain = require("multichain-node")({
    port: YOURPORT, 
    host: '127.0.0.1', 
    user: "multichainrpc", 
    pass: "YOURPASSWORD"
   });
 return multichain;
}

app.get("/publish", function(request, response) {
 var multichain = initiateMultichain();

multichain.publish({
  stream: 'engineers', 
  key: 'YOURNAME', 
  data: {
   "json":
   {
    'exp_block' : 'EXP_BLOCKCHAIN', 
    'exp_dev' :  'EXP_DEV', 
    'location' : 'LOCATION', 
    'linkedIn' : 'LINK', 
    'contact' :  'EMAIL', 
    'forHire' : TRUE | FALSE
   }
  }
 }, (err, info) => {
  console.log('Response: ' + info);
  response.json({transactionId: info});
 })
});

app.listen(8080, () => console.log('Server is up and running'))
