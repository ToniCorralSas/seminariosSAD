// https://www.w3schools.com/nodejs/nodejs_mongodb.asp
// $ mongo <dbname> --eval "db.dropDatabase()"
// $ mongo
// > show dbs
// consulta_bd.then(añadir_carro)
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/almacen'


// create database almacen
MongoClient.connect(url, function(err, db) {
  if(err) throw err;
  console.log("Database created!");
  db.close();  
});


// create collection products
var url = 'mongodb://localhost:27017/'
MongoClient.connect(url, function(err, db) {
  if(err) throw err;
  var dbo = db.db("almacen");
  dbo.createCollection("products", function(err, res) {
    if(err) throw err;
    console.log("Collection created!");
    db.close();
  });
}); 


// insert document in products collection
MongoClient.connect(url, function(err, db) {
  if(err) throw err;
  var dbo = db.db("almacen");
  var myobj = [ { cod : 1, desc : 'palos', stock : 0 },
                { cod : 2, desc : 'hierros', stock : 10 }, 
                { cod : 3, desc : 'muelles', stock : 5 }
              ];
  dbo.collection("products").insertMany(myobj, function(err, res) {
    if(err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});


// query
/*MongoClient.connect(url, function(err, db) {
  if(err) throw err;
  var dbo = db.db("almacen");
  var query = { cod : 1 };
  dbo.collection("products").find(query).toArray(function(err, result) {
    if(err) throw err;
    console.log(result);
    console.log(result.length);
    db.close();
  });
});*/
