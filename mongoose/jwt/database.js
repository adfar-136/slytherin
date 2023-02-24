const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/riya").then(()=>{
    console.log("connect to database")
}).catch(e=>{
    console.log(e)
})
const userSchema = mongoose.Schema({
    username:String,
    password:String
})

const userModel = mongoose.model("Users",userSchema)
module.exports = userModel