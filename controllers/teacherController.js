const Teacher  = require('../models/teacherModel');


exports.addTeacher = async (req,res) => {
    try{
        const teacher = new Teacher({name : req.body.name});
        await teacher.save();
        res.status(201).send(teacher);
    }catch(error){
        res.status(400).send(error);
    }
};


exports.getAllTeachers = async(req,res) => {
    try{
        const teachers = await Teacher.find();
        res.status(200).send(teachers);
    }catch(error){
        res.status(500).send(error);
    }
};
