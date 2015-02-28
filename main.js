#!/usr/bin/env node

var currency = require('y-currency');

var amount = parseInt(process.argv[2]);
var from = process.argv[3].toString();
var to = process.argv[4].toString();

currency.convert(amount,from,to,function(err,converted){

	if (err){
        console.log(err);
    }

	console.log('\n' + amount+from+' = '+converted+to);
});