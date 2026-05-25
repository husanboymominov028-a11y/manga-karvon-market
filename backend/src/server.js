const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: '🚀 Backend is running!',
    timestamp: new Date().toISOString()
  });
});

// API Routes placeholder
app.get('/api/products', (req, res) => {
  res.json({ 
    success: true,
    data: [],
    message: 'Products list endpoint'
  });
});

app.post('/api/auth/send-otp', (req, res) => {
  res.json({ 
    success: true,
    message: 'OTP sent to phone'
  });
});

app.get('/api/admin/stats', (req, res) => {
  res.json({ 
    success: true,
    data: {
      totalOrders: 0,
      totalRevenue: 0,
      totalUsers: 0
    }
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`📝 API: http://localhost:${PORT}/api`);
});
