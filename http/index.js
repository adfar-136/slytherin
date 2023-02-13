var http = require("http")
// http.createServer((request,response)=>{
//   response.write("Our first server")
//   response.end()
// }).listen(5000)
const fs = require("fs")
const server = http.createServer((req,res)=>{
    const data = fs.readFileSync("adfar.txt","utf-8")
    if(req.url === '/'){
        res.end("Welcome to home Page")
    } 
    else if(req.url === "/about"){
        res.end("Welcome to about page")
    }
    else if(req.url === "/contact"){
        res.end("Welcome to Contact page")
    }
    else if(req.url === "/adfar"){
        res.end(data)
    }else {
        res.end("<h1>Page not found</h1><p>ADfar Rasfgfhaggsjhhjagsh</p>")
    }
})
server.listen(3000,()=>{
    console.log("listening to port 3000")
})