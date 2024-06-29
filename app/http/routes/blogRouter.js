const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const blogController = require('../controllers/blogController');

router.get('/api/posts', authMiddleware.authenticateUser, blogController.getAllBlogPosts);

module.exports = router;