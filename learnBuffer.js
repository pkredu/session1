var bufferNew = Buffer.from('hello world');
var buffer2 = Buffer.from('1234');
buffer2.copy(bufferNew,5);
console.log(bufferNew.toString());
// checks
