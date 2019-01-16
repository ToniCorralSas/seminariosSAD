var rolodexFile = {
  a: 'We know A',
  b: 'We know B',
  c: 'We know C'
};

var rolodex = { a: 'We know this name' };

function retrieve(file, name, cb) {
  // Searches for name in file, and
  // invokes cb asynchronously
  setTimeout(function() {
    var p = file[name];
    cb(p);
  }, 0);
}

function processEntry(name) {
  return new Promise(function(resolve) {
    if(rolodex[name]) {
      resolve(rolodex[name]);
    }
    else {
      retrieve(rolodexFile, name, function(val) {
        rolodex[name] = val;
        resolve(val);
      });
    }
  });
}

function test() {
  testNames.forEach(function(name) {
    console.log('processing', name);
    processEntry(name).then(function(res) {
      console.log('processed', name);
    });
  });
}

var testNames = ['a', 'b', 'c'];
test();
