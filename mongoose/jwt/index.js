const passport = require("passport") 
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const userModel = require("./database")
const { hashSync, compareSync } = require("bcrypt")
const jwt = require("jsonwebtoken")
require("./passport")
app.use(bodyParser.json())
app.use(passport.initialize())
app.get("/",(req,res)=>{
    res.send("adfar")
})
app.post("/register",(req,res)=>{
    const user = new userModel({
        username : req.body.username,
        password: hashSync(req.body.password,10)
    })
    user.save().then(user=>{
        res.send({
            success : true,
            message:"user registered successfully"
        })
    }).catch(err =>{
        res.send({
            success : false,
            message:"something went wrong",
            error:err
        })
    })
})
app.post("/login",(req,res)=>{
   userModel.findOne({username:req.body.username}).then(user=>{
    if(!user){
        return res.status(401).send("could not find the user")
    }
    if(!compareSync(req.body.password,user.password)){
        return res.status(401).send({
            success : false,
            message:"Incorrect password"
        })
    }
    const payload = {
        username:user.username,
        id:user.id
    }
    const token = jwt.sign(payload,"secret",{expiresIn:"1d"})
    return res.status(200).send({
        success : true,
        message:"logged in successfully",
        token:"Bearer " + token
    })

   })
})
app.get("/profile",passport.authenticate('jwt', { session: false }),(req,res)=>{
    res.send(req.user.username);
})
app.listen(5000,()=>{
    console.log("listening to 5000 port")
})