const path = require("path")
// console.log(path.dirname("C:/Users/LEGION/Desktop/Batches/slytherin/path/index.js"))
// console.log(path.extname("C:/Users/LEGION/Desktop/Batches/slytherin/path/path.txt"))
// console.log(path.basename("C:/Users/LEGION/Desktop/Batches/slytherin/path/path.txt"))
// const parseobj = path.parse("C:/Users/LEGION/Desktop/Batches/slytherin/path/adfar.txt")
// console.log(parseobj)
// console.log(parseobj.name)
// console.log(parseobj.ext)

const pathh= path.format({
    root:"c:ignored",
    dir:"1/2/3/4/5/6",
    base:"adfar.js",
    ext:"/ignored",
    name:"adfarr"
})
console.log(pathh)
//dir>root,
//base>ext,name