const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/api/create-user', authController.createUser);
router.get('/api/protected', authMiddleware.authenticateUser, authController.protectedRoute);

module.exports = router;