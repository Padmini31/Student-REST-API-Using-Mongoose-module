let express = require("express");
let studentModel = require("../model/studentModel");

let fynByGrade = async (request, response) => {
    try {
        let sgrad = request.params.grad;
        console.log(sgrad);
        let result = await studentModel.find({grade:sgrad});
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}


let fynByClass= async (request, response) => {
    try {
        let scls = eval(request.params.cla);
        console.log(scls);
        let result = await studentModel.find({class:scls});
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}


let fynByADD = async (request, response) => {
    try {
        let sadd = request.params.add;
        console.log(sadd);
        let result = await studentModel.find({address:sadd});
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}

let getAllStu = async (request, response) => {
    try {
        let result = await studentModel.find();
        response.json(result);
    }
    catch (ex) {
        response.send(ex);
    }
}


let updADD= async (request, response) => {
    let stu = request.body;
        console.log(stu);
        try{
        let result = await studentModel.updateOne({_id:stu._id},{address:stu.address});
      if(result.modifiedCount>0){
        response.json(result);
      }
       else if(result.matchedCount>0){
        response.send("new Address is same as old address");
      }
       else{
       response.send("No record found");
    }
}
    catch (ex) {
        response.send(ex);
    }
}


let updgra = async (request, response) => {  //update Many do also 
    let student = request.body;
    //let result = await studentModel.updateOne({_id:student._id},{$set:{grade:"C"}});
    try {
        let result = await studentModel.updateOne({_id:student._id},{grade:student.grade});
        //let result = await studentModel.updateOne({_id:student._id},{$set: {age:student.age } });
        if(result.modifiedCount>0){
            response.send("record updated successfully");
        }
        else if(result.matchedCount>0){
            response.send("old and new record are same hence no updated");
        }
        else{
            response.send("no record found");
        }
    
    }
    catch (ex) {
        response.send("error genertaed " + ex);
    }
}



let updClass= async (request, response) => {
    try {
        let stu = request.body;
        console.log(stu);
        let result = await studentModel.updateOne({_id:stu._id},{class:stu.class});
       if(result.modifiedCount>0){
     response.send(result);
        }
       else if(result.matchedCount>0){
        response.send("new Class is same as old class");
       }
       else{
        response.send("No record found");
    }
}
    catch (ex) {
        response.send(ex);
    }
}




let DelUsingGrad= async (request, response) => {
    try {
        let sgrd = request.params.grade;
        console.log(sgrd);
        let result = await studentModel.deleteMany({grade:sgrd});
       if(result.deletedCount>0){
     response.json("RECORD DELEETD ");
        }
       else{
        response.send("No record found");
    }
}
    catch (ex) {
        response.send(ex);
    }
}



let DelUsingClass= async (request, response) => {
    try {
        let scls = request.params.class;
        console.log(scls);
        let result = await studentModel.deleteMany({class:scls});
       if(result.deletedCount>0){
     response.json("RECORD DELEETD ");
        }
       else{
        response.send("No record found");
    }
}
    catch (ex) {
        response.send(ex);
    }
}


module.exports = {getAllStu,DelUsingClass,DelUsingGrad,updClass,updgra,updADD,fynByADD,fynByClass,fynByGrade, };