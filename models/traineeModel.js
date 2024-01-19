const { default: mongoose } = require('mongoose');
const con = require('../db');
con.dbconnection();

const Schema = require('mongoose').Schema;

const TraineeSchema = new Schema({
    name: {
        type: [String, "Please enter only String for Tainee Name!"],
        required: [true, "Please send the name of the Trainee!"]
    },
    age: {
        type: Number,
        required: [true, "Please send the age of the Trainee!"],
        min: [18, "Age should be greater than 18yrs!"],
        max: [50, "Age should be less than 50yrs!"]
    },
    active: {
        type: Boolean,
    }
});

const TraineeModel = mongoose.model('Trainees', TraineeSchema);

module.exports = TraineeModel;  