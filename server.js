const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const workoutroutes = require('./Routes/workout');
const Workout = require('./models/workouts');
const workoutController = require('./controllers/workoutcontroller');

//Configuring dotenv
dotenv.config();
//Express App
const app = express();
//Setting Up Ports
app.listen(process.env.PORT, () =>{
    console.log('Server running on port 7050');
})
//Middlewares 
app.use(express.json());
app.use('/api/workout',workoutroutes); //Using the routes
//Connecting to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() =>{
    console.log('Connected to MongoDB Database');
}).catch((err) =>{
    console.log('Error connecting to MongoDB Database');
});