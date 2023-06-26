const express =  require('express');
const routes = express.Router();

//get a list of students from the database
routes.get('/',(req,res,next)=>{
    res.send({type:'Get request'});
});

//add student to the db
routes.post('/',async(req,res,next)=>{
    try{
        const student = new Student(re.body);
        const result = await student.save();
        res.send(result)
    } catch(error){
        console.log(error.message);
    }
    
});

//update students in the DB
routes.put('/:id',(req,res,next)=>{
    res.send({type:'Update request'});
});

//delete a student from the DB
routes.get('/:id',(req,res)=>{
    res.send({type:'Delete request'});
});

module.exports = routes;
