const parser = require('@babel/parser');
const fs = require('fs') ;


const code = fs.readFileSync(`${__dirname}/code/script.js`,'utf-8');
const ast = parser.parse(code,{}) ;

fs.writeFileSync(`${__dirname}/code/script.ast.json`, JSON.stringify(ast,undefined,2));

console.log('done');