const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    Name:{type:String},
    Roll:{type:Number},
    Class:{type:String},
    Remark:{type:String},
    Adult:{type:Boolean},
    Comments:[],
    details:{},
    dob:{type:Date}
})

const DemoModel = mongoose.model('DemoModel', DataSchema)

module.exports = DemoModel;
