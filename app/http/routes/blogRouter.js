const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/authMiddleware');
const blogController = require('../controllers/blogController');
const validateNewBlog = require('../middlewares/blogValidator/createBlogValidator');

router.get('/api/posts', authMiddleware.authenticateUser, blogController.getAllBlogPosts);
router.get('/api/post/:id', authMiddleware.authenticateUser, blogController.getSinglePost);
router.post('/api/posts/create', authMiddleware.authenticateUser, validateNewBlog, blogController.createBlogPost);

module.exports = router;