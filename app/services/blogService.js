const Blog = require('../../db/models/Blog');

async function getPosts() {
    const posts = await Blog.findAll();

    return posts;
}

module.exports = {
    getPosts
}