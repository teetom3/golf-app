const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, async (req, res) => {
  const { date, startTime, endTime } = req.body;

  try {
    const course = new Course({ date, startTime, endTime, user: req.user.id });
    await course.save();
    res.status(201).send('Course reserved');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const courses = await Course.find({ user: req.user.id });
    res.json(courses);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.put('/:id/approve', authMiddleware, async (req, res) => {
  if (!req.user.isAdmin) {
    return res.status(403).send('Access denied');
  }

  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).send('Course not found');
    }

    course.approved = true;
    await course.save();
    res.send('Course approved');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
