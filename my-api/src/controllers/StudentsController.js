
const StudentsModel = require('../models/StudentsModel');

//CRUD operation

//C = Create
exports.InsertStudent = (req, res)=>{

    let reqBody = req.body;
    
    StudentsModel.create(reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err});
        }
        else{
            res.status(201).json({status:"OK", data: data});
        }
    })
}

//R = Read
exports.ReadStudent = (req, res)=>{

    let Query = {};
    //let Projection = "Name Roll Class Remarks";
    let Projection = "Name Roll Class";

    StudentsModel.find(Query, Projection, (err, data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err});
        }
        else{
            res.status(201).json({status:"Success", data: data});
        }
    })
}

//U = Update
exports.UpdateStudent = (req, res)=>{

    let id = req.params.id;
    let Query = {_id:id};
    let reqBody = req.body;

    StudentsModel.updateOne(Query, reqBody, (err, data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err});
        }
        else{
            res.status(203).json({status:"Updated", data: data});
        }
    })
}

//D = Delete
exports.DeleteStudent = (req, res)=>{

    let id = req.params.id;
    let Query = {_id:id};

    StudentsModel.remove(Query, (err, data)=>{
        if(err){
            res.status(400).json({status:"Fail", data: err});
        }
        else{
            res.status(200).json({status:"Deleted", data: data});
        }
    });
}
