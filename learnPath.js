var path = require('path');

var newPath = './new.txt';
console.log(path.basename(newPath));
console.log(path.extname(newPath));
console.log(path.isAbsolute(newPath));