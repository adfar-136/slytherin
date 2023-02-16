const EventEmitter = require("events")
const eventEmitter = new EventEmitter()
var function1 = (msg)=>{
    console.log("message from function 1", msg)
}
var function2 =(msg)=>{
    console.log("message from function 2 ", msg)
}
eventEmitter.on("myEvent",function1)
eventEmitter.on("myEvent",function2)
eventEmitter.on("myEvent",function2)
console.log(eventEmitter.listeners("myEvent"))
console.log(eventEmitter.listenerCount("myEvent"))
eventEmitter.prependListener("myEvent",function1)
console.log(eventEmitter.listeners("myEvent"))

// eventEmitter.removeListener("myEvent",function1)
// eventEmitter.removeAllListeners("myEvent")
//trigger your event
eventEmitter.emit("myEvent","Adfar rashid")
