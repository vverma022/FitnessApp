const express = require('express');
const router = express.Router();
const workout = require('../models/workouts');
const workoutController = require('../controllers/workoutcontroller');

//Get Requsts
router.get('/',workoutController.getWorkout)

router.get('/:id',workoutController.getSingleWorkout)

//Post Requests
router.post('/',workoutController.createWorkout)


//Delete Requests
router.delete('/:id',workoutController.deleteWorkout)
//Updating Request
router.patch('/:id',workoutController.upadateWorkout)



module.exports = router;