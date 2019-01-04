var fs = require("fs");
/*var rolodexFile = fs.open("My rollodex file", "w", function(err, file) {
  if(err) throw err;
});*/
var rolodexFile = fs.readFileSync('My rollodex file', {encoding: 'utf-8'});
console.log(rolodexFile);
var rolodex = {a: "We know this name"};


function retrieve(file, name, cb) {
  // Searches for name in file, and    
  // invokes cb with record found
}


function processEntry(name, cb) {
  if(rolodex[name]) {
    cb(rolodex[name]);
  }
  else {
    retrieve(rolodexFile, name, function(val) {
      rolodex[name] = val;
      cb(val);
    });
  }
}


function test() {
  for(var n in testNames) {
    console.log("processing ", n);
    processEntry(n, function(res) {
      console.log("processed ", n);
    });
  }
}


function p() {
  console.log(rolodex);
}



var testNames = ["a", "b", "c"];
test();
setTimeout(p, 3000);
