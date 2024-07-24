const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const User = require('../models/User');
const nodemailer = require('nodemailer');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');

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


router.post('/:courseId/approve', authMiddleware, adminMiddleware, async (req, res) => {
  const { courseId } = req.params;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).send('Course not found.');
    }

    course.approved = true;
    await course.save();

    const user = await User.findById(course.user);
    if (user) {
      // Envoi de l'email à l'utilisateur
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'thomas.zeryouh@gmail.com',
          pass: 'tzcs hhhp fgjt kepo'
        }
      });

      const mailOptions = {
        from: 'thomas.zeryouh@gmail.com',
        to: user.email,
        subject: 'Cours confirmé',
        text: `Votre cours du ${course.date} et  ${course.time} a été confirmé.`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
    }

    res.status(200).send('Course approved.');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// routes/course.js (ajout d'une route)
router.get('/pending', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const courses = await Course.find({ approved : false });
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
