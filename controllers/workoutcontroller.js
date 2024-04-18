
const mongoose = require('mongoose');
const Workout = require('../models/workouts');

//Get all workout
const getWorkout = async (req,res) => {
    try{
        const workouts = await Workout.find({}).sort({createdAt: -1});
        res.status(200).json(workouts);
    } catch(err){
        res.status(400).json({msg: "Error Occured while fetching workouts"})
    }
}

//Get single workout
const getSingleWorkout = async (req,res) => {
    const {id} = req.params;
    const workout = await Workout.findById(id);
    if(workout){
        res.status(200).json(workout);
    } else {
        res.status(404).json({msg: `Workout with id ${id} not found`})
    }
}

//create workout
const createWorkout = async (req,res) => {
    const {title,load,sets} = req.body;
    try{
     const workout = await Workout.create({title,load,sets});
     res.status(200).json(workout);
    } catch(err){
        res.status(400).json({msg: "Error Occured while creating workout"})
    }
}
//Delete a workout
const deleteWorkout = async (req,res) => {
    const {id} = req.params;
    const workout = await Workout.findByIdAndDelete(id);
    if(workout === null){
        res.status(404).json({msg: `Workout with id ${id} not found`})
    } else {
        res.status(200).json({msg: `Workout with id ${id} deleted`})
    
    }
}
//Updating workout
const upadateWorkout = async (req,res) => {
    const {id} = req.params;
    const workout = await Workout.findOneAndUpdate({id},{...req.body})
    if(workout === null){
        res.status(404).json({msg: `Workout with id ${id} not found`})
    } else {
        res.status(200).json({msg: `Workout with id ${id} updated`})
    }
}


module.exports = {
    createWorkout,
    getWorkout,
    getSingleWorkout,
    deleteWorkout,
    upadateWorkout
}