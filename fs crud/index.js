const name = "hari"
console.log(name)

const fs = require('fs')

fs.writeFileSync("crud_fs.txt","data has been added successfully")

fs.appendFileSync("crud_fs.txt"," , more data has been added successfully")

const read_data = fs.readFileSync("crud_fs.txt","utf8")
// const data = read_data.toString()
console.log(read_data)

// fs.unlinkSync("crud_fs.txt")
// console.log("file deleted succcessfully")

