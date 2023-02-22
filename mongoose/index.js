const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/slytherin").then(()=>{
    console.log("connected to Mongodb server")
}).catch((err)=>{
    console.log(err)
})

const student = new mongoose.Schema({
    name:String,
    age:Number,
    Status:Boolean
})

const Students = new mongoose.model("Students",student)
const add =async()=>{
    const ff =await Students.find()
    console.log(ff)
    // const bharat = Students.create({
    //     name:"Rahul",
    //     age:25,
    //     Status: true
    // })
    // bharat.save()

}
add()