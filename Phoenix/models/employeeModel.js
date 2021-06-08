const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    Id: Number,
    email: String,
    telephone: {
        type: Number,
        required: true
    },
    role: String

});

module.exports = mongoose.model('employee', employeeSchema);