var http = require('http');
var Q = require('q');
var host = '127.0.0.1';
var port = 3000;
var carrito = {2: 0};
var num = 13;
var habia;
//var myquery = { desc : "hierros" };
var myquery = { cod : 2 };

var server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Servidor HTTP Carrito');
});

server.listen(port, host, () => {
  console.log('Servidor corriendo en http://' + host + ':' + port);
});



var MongoClient = require('mongodb').MongoClient;
/***************************************************************************/
//var url = 'mongodb://localhost:27017/almacen'
/*function getQuery(url) {
  MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db("almacen");
    var query = { cod : 1 };
    dbo.collection("products").find(query).toArray(function(err, result) {
      if(err) throw err;
      db.close();
      console.log(result);
    });
  });
}
var aux = Q.denodeify(getQuery);
var promise = aux('mongodb://localhost:27017/almacen');
promise.then(console.log, console.error);*/



/***************************************************************************/
// https://stackoverflow.com/questions/19112801/node-js-using-promises-with-mongodb#
/*function getQuery1() {
  return MongoClient.connect('mongodb://localhost:27017/almacen').then(function(db) {
    var dbo = db.db('almacen');
    var collection = dbo.collection('products');
    return collection.find().toArray();
  }).then(function(items) {
    //console.log(items);
    return items;
  });
}
getQuery1().then(function(items) {
  console.log("The promise was fulfilled with items!\n", items);
}, function(err) {
  console.log("The promise was rejected\n", err);
});*/



/***************************************************************************/
function getQuery2(url) {
  var deferred = Q.defer();
  MongoClient.connect(url, function(err, db) {
    if(err) deferred.reject(err);
    else {
      deferred.resolve(db.db("almacen"));
    }
  });
  return deferred.promise;
}

function getQuery3(dbo) {
  var deferred = Q.defer();
  dbo.collection("products").find(myquery).toArray(function(err, result) {
    if(err) deferred.reject(err);
    else {
      deferred.resolve(result);
    }
  });
  return deferred.promise;
}

function removeStock(url) {
  var deferred = Q.defer();
  MongoClient.connect(url, function(err, db) {
    if(err) deferred.reject(err);
    else {
      deferred.resolve(db.db("almacen"));
    }
  });
  return deferred.promise;
}

function removeStock1(dbo) {
  var deferred = Q.defer();
  var diff = habia - num;
  var newvalues = { $set: {cod: 2, stock: diff} };
  dbo.collection("").updateMany(myquery, newvalues, 
                                       function(err, res) {
    if(err) deferred.reject(err);
    else deferred.resolve(res);
  });
  return deferred.promise;
}

getQuery2('mongodb://localhost:27017/almacen')
  .then(getQuery3)
  .then(function(x) { 
    if(x.length === 1) {
      console.log(x);
      var cod = x[0]['cod'];
      var desc = x[0]['desc'];
      habia = x[0]['stock'];
      if(cod in carrito) {
      }
      else {
        carrito[cod] = 0;
      }
      if(habia < num) {
        console.log("se intentan sacar demasiadas existencias");
        return "se intentan sacar demasiadas existencias";
      }
      else {
        carrito[cod] += num;
        console.log('objetos añadidos al carrito');
        return 'mongodb://localhost:27017/almacen';
      }
    }
    else
      console.log("no coincidencia");
      return "no coincidencia";
  })
  //.then(console.log, console.error)
  .then(removeStock)
  .then(removeStock1)
  .catch(function(err) {console.log("error")});
