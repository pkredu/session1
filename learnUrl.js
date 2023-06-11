var url = require('url');
var urlAddress = 'http://localhost:8080/index.html?year=2023';
var parsedAddress = url.parse(urlAddress,false,true);

console.log(parsedAddress.host);
console.log(parsedAddress.pathname);
console.log(parsedAddress.search);
