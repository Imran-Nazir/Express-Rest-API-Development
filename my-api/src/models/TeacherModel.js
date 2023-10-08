const mongoose = require('mongoose');

const TeacherSchema = mongoose.Schema({
    Name:String,
    ID:String,
    Age:String,
    Join_Date:String,
    Subject:String,
})

const TeacherModel = mongoose.model('teacher', TeacherSchema);

module.exports = TeacherModel;