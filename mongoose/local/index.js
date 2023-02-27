const express = require("express")
const app = express()
const expressSession = require("express-session")
const passport = require("passport")
const bodyparser = require("body-parser")
const {ConnectMongoose,Users} = require("./database")
const {initializePassport} = require("./passportconfig")
app.use(expressSession({
    secret:"secret",
    resave : false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
ConnectMongoose()
initializePassport(passport)
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/register",(req,res)=>{
    res.render("register")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.post("/login",passport.authenticate("local"))
app.post("/register",async (req,res)=>{
   const user =await Users.findOne({username:req.body.username})
   if(user) return res.status(400).send("User already exists")
   const newUser =await Users.create(req.body)
   res.status(200).send(newUser)
})
app.listen(4000,(req,res)=>{
    console.log("listening  to 4000 port")
})