const service = require('../../services/blogService');

async function getAllBlogPosts(request, response) {
  try {
    const results = await service.getPosts();

    response.json({ data: results });
  } catch (error) {
    console.log('Error querying database: ', error);

    response
      .status(error.statusCode || 500)
      .json({ data: { error: `${error.message}` } });
  }
}

async function getSinglePost(request, response) {
  try {
    const result = await service.getPost(request.params.id);

    response.json({ data: result });
  } catch (error) {
    console.log('Error querying database: ', error);

    response
      .status(error.statusCode || 500)
      .json({ data: { error: `${error.message}` } });
  }
}

async function createBlogPost(request, response) {
  try {
    const result = await service.createPost(request.body);

    response.json({ data: result });
  } catch (error) {
    console.log('Error querying database: ', error);

    response
      .status(error.statusCode || 500)
      .json({ data: { error: `${error.message}` } });
  }
}

module.exports = {
  getAllBlogPosts,
  getSinglePost,
  createBlogPost
};
