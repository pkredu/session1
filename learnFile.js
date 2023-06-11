var fs = require('fs');

//fs.writeFileSync('new2.txt','this is anothr new file!');
const varRead = fs.readFileSync('new2.txt','utf-8');
console.log(varRead);