const TeacherModel = require('../models/TeacherModel')

//CRUD -> Create
exports.CreateTeacher = (req, res)=>{
    let reqBody =  req.body;

    TeacherModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err});
        }
        else{
            res.status(200).json({status:"Success", data: data});
        }
    })
}

//CRUD -> Read
exports.ReadTeacher = (req, res)=>{
    let query = {};
    let projection = "Name ID Age Join_Date Subject";

    TeacherModel.find(query, projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err});
        }
        else{
            res.status(200).json({status:"Success", data: data});
        }
    })
}

//CRUD -> Update
exports.UpdateTeacher = (req, res)=>{
    let id = req.params.id;
    let query = {ID:id};
    let reqBody = req.body;

    TeacherModel.updateOne(query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err});
        }
        else{
            res.status(200).json({status:"Success", data: data});
        }
    })
}

//CRUD -> Delete
exports.DeleteTeacher = (req, res)=>{
    let id = req.params.id;
    let query = {ID:id};

    TeacherModel.remove(query, (err, data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err});
        }
        else{
            res.status(200).json({status:"Success", data: data});
        }
    })
}