const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  
    fullName: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    }
}) 

module.exports = mongoose.model('students', studentSchema)