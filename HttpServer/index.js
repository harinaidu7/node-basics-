//In node we can create web server using 'http'

const fs = require('fs')
const http = require("http");
const { type } = require("os");
const server = http.createServer((req,res) => {
  // res.end("Hello there ");
  if(req.url == '/'){
    res.end("Hello,this is home page")
  }
  else if(req.url == '/about'){
    res.end("Hello,this is About page")
  }
  else if(req.url =='/contact'){
    res.end("Hello,this is Contact page")
  }
  else if(req.url =='/userapi'){
    fs.readFile("data.json","utf-8",(err,data)=>{
      console.log(data)
      res.end(data)
    })
  }
  else{
    res.writeHead(404,{})
    res.end("<h1>Page not found .... pls head to home page<h1>")
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("listneing");
});
