const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const WorkoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    load: {
        type: Number,
        required: true
    },
    sets:{
        type: Number,
        required: true
    },
},{timestamps: true});

module.exports = mongoose.model('workout', WorkoutSchema);