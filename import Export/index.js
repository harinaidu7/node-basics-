//every file in node is considered as a module 
// we can export and import any module in node using 'module.exports'


const operator = require("./operator")

console.log(operator)
console.log(operator.add(5,5))
console.log(operator.sub(12,3))
console.log(operator.mul(15,3))