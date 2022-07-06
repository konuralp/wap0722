const dns = require("dns"); //Require dns

//Resolve ipv4 address/es of miu.edu using resolve4 and console log it with callback func.
dns.resolve4('www.miu.edu', (err, addresses) => console.log(addresses));