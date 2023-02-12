let express =require("express");
let router  = express.Router();

let studentController = require("../controller/studentController");


//find all students
//http://localhost:3000/api/students/findAllStu        //restapis
router.get("/findAllStu", studentController.getAllStu);



//FIND BY GRADE
//http://localhost:3000/api/students/findByGrade/A         //restapis
router.get("/findByGrade/:grad", studentController.fynByGrade);


//FIND BY CLASS
//http://localhost:3000/api/students/findByClass/1       //restapis
router.get("/findByClass/:cla", studentController.fynByClass);


//FIND BY ADDRESS
//http://localhost:3000/api/students/findByAddre/kolkata     //restapis
router.get("/findByAddre/:add", studentController.fynByADD);


//UPDATE GRD
//http://localhost:3000/api/students/updateGrade //restapis
router.patch("/updateGrade", studentController.updgra);


//UPDAT CLASS
//http://localhost:3000/api/students/UpdateClass    //restapis
router.patch("/UpdateClass", studentController.updClass);


//
//http://localhost:3000/api/students/deleteusingGrade/A   //restapis
router.delete("/deleteusingGrade/:grade", studentController.DelUsingGrad);


//http://localhost:3000/api/students/deleteusingClass/4   //restapis
router.delete("/deleteusingClass/:class", studentController.DelUsingClass);


//http://localhost:3000/api/students/UpdateAdd                 
router.patch("/UpdateAdd", studentController.updADD);

module.exports = router;