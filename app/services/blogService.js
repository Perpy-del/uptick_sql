const Blog = require('../../db/models/Blog');
const NotFoundError = require('../errors/NotFoundError');
const sluggify = require('../utilities/sluggify');

// Get All Posts
async function getPosts() {
  const posts = await Blog.findAll();

  return posts;
}

// Get A Single Post
async function getPost(id) {
  const existingPost = await Blog.findByPk(id);

  if (!existingPost) {
    throw new NotFoundError('Post not found');
  }

  return existingPost;
}

// Create A New Post
async function createPost(data) {
  const newPost = await Blog.create({
    title: data.title,
    slug: sluggify(data.title),
    author: data.author,
    body: data.body,
    category: data.category ?? 'Uncategorized',
    thumbnail: data.thumbnail,
  });

  return newPost;
}

module.exports = {
  getPosts,
  getPost,
  createPost
};
