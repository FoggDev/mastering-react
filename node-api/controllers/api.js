import express from 'express';

const router = express.Router();

const posts = [
  {
    id: 1,
    title: 'My blog post 1',
    content: '<p>Content 1</p>',
    author: 'Carlos Santana'
  },
  {
    id: 2,
    title: 'My blog post 2',
    content: '<p>Content 2</p>',
    author: 'Carlos Santana'
  },
  {
    id: 3,
    title: 'My blog post 3',
    content: '<p>Content 3</p>',
    author: 'Carlos Santana'
  },
  {
    id: 4,
    title: 'My blog post 4',
    content: '<p>Content 4</p>',
    author: 'Carlos Santana'
  },
];

// /api
router.get('/', (req, res, next) => {
  res.send(`
    <p>API Endpoints:</p>
    <ul>
      <li><a href="/api/posts">/api/posts</a> - Fetch all posts</li>
      <li><a href="/api/post/1">/api/post/:id</a> - Fectch single post</li>
    </ul>
  `);
});

// api/posts
router.get('/posts', (req, res, next) => {
  res.json({
    response: posts
  })
});

// api/post/:id
router.get('/post/:id', (req, res, next) => {
  const { params: { id } } = req;

  const singlePost = posts.find(post => post.id === Number(id));

  if (!singlePost) {
    res.send({
      error: true,
      message: 'Post not found'
    });
  }

  res.json({
    response: [singlePost]
  });
});

export default router;
