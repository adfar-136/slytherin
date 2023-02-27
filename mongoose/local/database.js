const mongoose = require("mongoose")
exports.ConnectMongoose =()=>{
    mongoose.connect("mongodb://localhost:27017/locall").then(()=>{
        console.log("connected to mongodb")
    }).catch((e)=>{console.log(e)})
    
}
const userSchema = new mongoose.Schema({
    name:String,
    username:{
        type:String,
        require:true,
        unique:true
    },
    password:String,
})
exports.Users = mongoose.model("Users",userSchema)