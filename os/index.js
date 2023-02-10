const os = require("os")
console.log("|CPU Architecture :" + os.arch())
console.log("Free Memory :")
const freemem = os.freemem()/(1024*1024*1024);
const total = os.totalmem()/(1024*1024*1024);
console.log(freemem)
console.log(total)
console.log("HostName:" + os.hostname())
console.log("Operating System Name:" + os.type())
console.log("Operating System Name:" + os.platform())
console.log("Operating System Name:" + os.release())
console.log(os)
