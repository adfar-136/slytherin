const express= require("express")
const app = express()
const students = require("./students")
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.json("Api is working")
})
app.get("/api/students",(req,res)=>{
    res.json(students)
})
app.post("/api/students",(req,res)=>{
    const user = {
        id : students.length + 1,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email : req.body.email 
    }
    students.push(user)
    res.send(user)
})

app.put("/api/students/:id",(req,res)=>{
   
})
app.delete("/api/students/:id",(req,res)=>{
    const id = req.params.id
    let first_name= req.body.first_name
    let last_name = req.body.last_name
    let email = req.body.email
    let index = students.findIndex((student)=>{
        return (student.id === Number.parseInt(id))
    })
    if(index >= 0){
        let std = students[index]
        std.first_name = first_name
        std.last_name = last_name
        std.email = email
        res.json(std)
    }
    else{
        res.status(404)
    }
})
app.listen(4000,()=>{
    console.log("Listening to 4000 port")
})