const express = require('express');
const cors = require('cors');
const app = express();

// 1. Define allowed origins
const allowedOrigins = [
  'https://ai-frontend-snowy.vercel.app', // Your production site
  'http://localhost:5173'                 // Your local machine
];

// 2. Apply CORS middleware configuration
app.use(cors({
  origin: function (origin, callback) {
    // Allow server-to-server or tools like Postman (where origin is undefined)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
}));

// Your other routes and middlewares continue down here...
// app.use('/api/auth', authRoutes);

module.exports = app;