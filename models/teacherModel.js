const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema({
    name : {type : String , required : true},
    nic : {type : String , required : true},
});


const Teacher = mongoose.model('Teacher' , teacherSchema);

module.exports = Teacher;