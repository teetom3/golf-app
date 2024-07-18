// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth'); // Assurez-vous d'avoir cette route
const courseRoutes = require('./routes/courses'); // Assurez-vous d'avoir cette route

const app = express();

// Middleware
app.use(cors()); // Activer CORS
app.use(express.json()); // Pour parser le JSON

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/golf-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});

// Routes
app.use('/api/auth', authRoutes); // Routes d'authentification
app.use('/api/courses', courseRoutes); // Routes de cours

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
