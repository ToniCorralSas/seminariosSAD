let multichain = require("multichain-node")({
  port: YOURPORT, 
  host: '127.0.0.1', 
  user: "multichainrpc", 
  pass: YOURPASSWORD
});

/*multichain.getInfo((err, info) => {
  if(err) {
    throw err;
  }
  console.log(info);
});*/

multichain.publish({
  stream: 'stream1', 
  key: 'key1', 
  data: new Buffer(JSON.stringify({ hola: "adios" })).toString('hex')
});
