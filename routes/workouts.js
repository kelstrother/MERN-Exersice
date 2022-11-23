const express = require('express')
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')
const Workout = require('../models/workoutModel')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST A NEW WORKOUT
router.post('/', createWorkout)

// DELETE A WORKOUT
router.delete("/:id", deleteWorkout);

// UPDATE A WORKOUT
router.patch("/:id", updateWorkout);

module.exports = router