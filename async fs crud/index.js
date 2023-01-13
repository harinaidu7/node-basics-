//file system are core node moduel.As the name suggest async fs works with async data 
//to import any core moduel we use  'require' with model name  
//fs.writeFile is used write data 
//fs.appendFile -- update 
//fs.readFile -- read , utf-8 convert data from bits to actual form of data
//fs.unlike -- used to delete file / data

const fs = require("fs")

fs.writeFile("data.txt","Hii,my name is Krishnan",()=>{
    console.log("data added successfully")
})

fs.appendFile("data.txt",",now I am learning NODE",()=>{
    console.log(" more data added successfully")
})

fs.readFile("data.txt","utf-8",(err,data)=>{
    console.log(data)
})

// fs.unlink("data.txt",(err)=>{
//     console.log('file deleted')
// })