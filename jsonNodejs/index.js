const fs = require('fs')

const bioData = {
    name : "Krishnan",
    age : 22,
    city : "Vasai"
}

const data = JSON.stringify(bioData)
// console.log(data)
// fs.writeFile("data.json",data,(err)=>{
//     console.log("data added successfully")
// })

fs.readFile("data.json","utf-8",(err,data)=>{
    const orgData = JSON.parse(data)
    console.log(orgData)
    console.log(data)
})