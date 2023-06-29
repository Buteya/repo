const express =  require('express');
const Student = require('../models/student');
const routes = express.Router();

//get all students
routes.get('/',async(req,res,next)=>{
    try{
        const result =await Student.find();
        res.send(result);
    }catch(error){
        console.log(error.message);
    }
});

//add student to the db
routes.post('/',async(req,res,next)=>{
    try{
        const student = new Student(req.body);
        const result = await student.save();
        res.send(result)
    } catch(error){
        console.log(error.message);
    }
    
});

//get student by id
routes.get('/:id',async(req,res,next)=>{
    const id = req.params.id;
    try{
        const student = await Student.findById(id);
        res.send(student);
    }catch(error){
        console.log(error.message);
    }
})

//update students in the DB
routes.put('/:id',(req,res,next)=>{
    res.send({type:'Update request'});
});

//update student
routes.patch('/:id',async(req,res,next)=>{
    try{
        const id = req.params.id;
        const update = req.body;
        const options = {new:true};
        const result = await Student.findByIdAndUpdate(id,update,options);
        res.send(result);
    }catch(error){
        console.log(error.message);
    }
})

//delete a student from the DB
routes.delete('/:id',async(req,res,next)=>{
    const id = req.params.id;
    try{
        const student = await Student.findByIdAndRemove(id);
        res.send(student);
    }catch(error){
        console.log(error.message);
    }
});

module.exports = routes;
