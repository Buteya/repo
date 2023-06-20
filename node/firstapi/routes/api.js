const express =  require('express');
const routes = express.Router();

//get a list of students from the database
routes.get('/students',(req,res)=>{
    res.send({type:'Get request'});
});

//add student to the db
routes.post('/students',(req,res)=>{
    res.send({type:'Post request'});
});

//update students in the DB
routes.put('/students:id',(req,res)=>{
    res.send({type:'Update request'});
});

//delete a student from the DB
routes.get('/students:id',(req,res)=>{
    res.send({type:'Delete request'});
});

module.exports = routes;
