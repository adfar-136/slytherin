var express = require("express")
const app = express()
// app.anyMethod(path,function)
// app.use(path,express.static(root,[options]))
const path = require("path")
const staticPath = path.join(__dirname,"./public")
// app.use('/about',express.static("./public/index.html"))
app.use(express.static(staticPath))
app.get("/",(req,res)=>{
    res.send("Welcome to Express")
})
app.get("/about",(req,res)=>{
    res.send("Welcome to about page")
})
app.get("/adfar",(req,res)=>{
    res.send("Welcome to Adfar's Page")
})
app.get("/html",(req,res)=>{
    res.write("<h1>Welcome to HTMLPage</h1>")
    res.write("<h1>Welcome to HTMLPage</h1>")
    res.send()
})
app.get("/temp",(req,res)=>{
    res.json({
        name:"Adfar",
        age:25,
        prof: "educator"
    })
})
app.get("/aob",(req,res)=>{
    res.json([
        {
            id:1,
            name:"Adfar"
        },{
            id:2,
            name:"Rahul"
        }
    ])
})
app.listen(8000,()=>{
    console.log("Listening to 8000 port")
})
