const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');


router.post('/createTeacher', teacherController.addTeacher);
router.get('/fetchTeachers', teacherController.getAllTeachers);


module.exports = router;
