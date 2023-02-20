const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
const studenArray = require("./InitialData")
let currentId = studenArray.length
app.get("/api/student",(req,res)=>{
    res.json(studenArray)
})
app.get("/api/student/:id",(req,res)=>{
    let id  =req.params.id;
    if(!isNaN(id)){
        id=parseInt(id)
        let studentObject = studenArray.find((e)=>{
            return (e.id === id)
        })
        if (studentObject === undefined || studentObject === {}){
            return res.sendStatus(404)
        }
        else {
            return res.json(studentObject)
        }
    }
    else{
        return res.sendStatus(400)
    }
})
app.post("/api/student",(req,res)=>{
    let reqkeys = Object.keys(req.body)
    if(reqkeys.find((e)=>{return e === "name"}) && reqkeys.find((e)=>{return e === "currentClass"}) && 
    reqkeys.find((e)=>{return e === "division"})){
        if(!isNaN(req.body.currentClass)){
            let name = req.body.name;
            let currentClass = req.body.currentClass;
            let division = req.body.division;
            currentId++
            studenArray.push({id:currentId,name:name,currentClass:parseInt(currentClass),division:division})
            return res.json({id:currentId})

        }
        else{
            return res.sendStatus(400)
        }

    }
    else {
        return res.sendStatus(404)
    }
})
app.listen(5000,()=>{
    console.log("listening to 5000 port")
})