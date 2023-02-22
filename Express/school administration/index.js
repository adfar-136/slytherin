const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const studenArray = require("./InitialData");
let currentId = studenArray.length;
app.get("/api/student", (req, res) => {
  res.json(studenArray);
});
app.get("/api/student/:id", (req, res) => {
  let id = req.params.id;
  if (!isNaN(id)) {
    id = parseInt(id);
    let studentObject = studenArray.find((e) => {
      return e.id === id;
    });
    if (studentObject === undefined || studentObject === {}) {
      return res.sendStatus(404);
    } else {
      return res.json(studentObject);
    }
  } else {
    return res.sendStatus(400);
  }
});
app.post("/api/student", (req, res) => {
  let reqkeys = Object.keys(req.body);
  if (
    reqkeys.find((e) => {
      return e === "name";
    }) &&
    reqkeys.find((e) => {
      return e === "currentClass";
    }) &&
    reqkeys.find((e) => {
      return e === "division";
    })
  ) {
    if (!isNaN(req.body.currentClass)) {
      let name = req.body.name;
      let currentClass = req.body.currentClass;
      let division = req.body.division;
      currentId++;
      studenArray.push({
        id: currentId,
        name: name,
        currentClass: parseInt(currentClass),
        division: division,
      });
      return res.json({ id: currentId });
    } else {
      return res.sendStatus(400);
    }
  } else {
    return res.sendStatus(404);
  }
});
app.put("/api/student/:id", (req, res) => {
  if (!isNaN(req.params.id)) {
    let id = parseInt(req.params.id);
    let studentObjectOld = studenArray.find((e) => {
      return e.id === id;
    });
    if (studentObjectOld === undefined) {
      return res.sendStatus(400);
    } else {
      let updateObject = req.body;
      if (
        Object.keys(updateObject).find((e) => {
          return e === "currentClass";})
      ) {
        if (!isNaN(updateObject.currentClass)) {
          updateObject.currentClass = parseInt(updateObject.currentClass);
        }
        else {
            return res.sendStatus(400);
          }
      
      let studentObjectNew = {...studentObjectOld,...updateObject}
     
      let index = studenArray.indexOf(studentObjectOld)
      studenArray.splice(index,1)
      studenArray.push(studentObjectNew)
      res.sendStatus(200)
    }
      else{
        res.sendStatus(404)
      }
    }
  }
  else{
      return res.sendStatus(400)  
  }
});
app.delete("api/student/:id",(req,res)=>{
    let id = req.params.id;
    if(!isNaN(id)){
        id =parseInt(id)
        let studentObject = studenArray.find((e) => {
            return e.id === id;
          });
          if(studentObject !== undefined){
            let index = studenArray.indexOf(studentObject)
            studenArray.splice(index,1)
            return res.sendStatus(200)
          }
          else{
            return res.sendStatus(404)
          }
    }
    else{
        return res.sendStatus(400)
    }

})
app.listen(5000, () => {
  console.log("listening to 5000 port");
});
