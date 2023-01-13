const name = "hari"
console.log(name)

const fs = require("fs")

fs.writeFileSync("readAndWrite.txt","Hello there")

fs.appendFileSync("readAndWrite.txt","  Hello there again")

const data = fs.readFileSync("readAndWrite.txt")
console.log(data)

org_data = data.toString()
console.log(org_data)