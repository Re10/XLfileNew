var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employees = new Schema({
    emp_code: String,
    manager_code: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "manager"
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    status: Boolean,
    manager_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "manager"
    }

});
module.exports = mongoose.model('employees', employees);
