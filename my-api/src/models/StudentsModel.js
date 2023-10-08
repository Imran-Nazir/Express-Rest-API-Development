const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    Name: String,
    Roll: {type:String, unique:true}, //unique validation

    /*
    Roll:{ //custom error message: min max er khetre type Number na hole kaj korena
            type:Number, 
            min:[6, 'Min 6 & Max 12, But Supplied value is = {VALUE}'],
            max:[12,'Min 6 & Max 12, But Supplied value is = {VALUE}']
         }, */

    Class: {type:String, required:true},  //required validation
    Remarks: {type:String, default:"No remarks"}, // Remarks dite vule geleo default akare "No remarks" niye nibe

    Mobile:{ 
        type:String,
        validate: {
            validator: function(value){
                /*
                //Custom validation
                if(value.length === 11){
                    return true;
                }
                else{
                    return false;
                }
                */
                
                //regex validation
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(value)
            },
            message:"11 Digit Mobile Number Required!"
        }
    }
}, 
{versionKey:false}) //version-key showing or not '_v:'


const StudentsModel = mongoose.model('students', DataSchema);

module.exports = StudentsModel;