const mongoose = require('mongoose');
const schema = mongoose.Schema;

const studentSchema = new schema({
    firstname:{
        type: String,
        required:[true,'Firstname is required']
    },
    lastname: {
        type: String,
        required:[true,'Lastname is required'],
    },
    gender:{
        type:String
    }
});
const Student = mongoose.model('student',studentSchema);
module.exports = Student;