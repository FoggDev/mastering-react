import express from 'express';
import jwt from 'jsonwebtoken';
import {
  createPost,
  findAllPosts,
  findBySlug,
  removePost,
  updatePost
} from './blog';

import { login } from '../models/user';

import config from '../config';

const {
  security: {
    secretKey,
    expiresIn
  }
} = config;

const router = express.Router();

const validateToken = (req, res, next) => {
  if (req.headers['access-token']) {
    // Bearer <token>
    // [0] = Bearer
    // [1] = <token>
    req.accessToken = req.headers['access-token'].split(' ')[1];

    return next();
  } else {
    res.status(403).send({
      error: 'You must send an acces-token header'
    });
  }
}

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  login(username, password, data => {
    // Invalid login
    if (Object.keys(data).length === 0) {
      res.status(403).send({ error: 'Invalid login' });
    }

    // Correct login
    jwt.sign({ data }, secretKey, { expiresIn }, (error, accessToken) => {
      if (error) {
        res.status(403).send({ error: 'Invalid login' });
      } else {
        res.json({
          accessToken
        });
      }
    })
  });
});

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
router.get('/posts', validateToken, (req, res, next) => {
  jwt.verify(req.accessToken, secretKey, (error, userData) => {
    if (error) {
      console.log('ERROR', error);
      res.status(403).send({
        error: 'Invalid token'
      });
    } else {
      findAllPosts(posts => res.json({ response: posts }));
    }
  });
});

// api/post/:slug
router.get('/post/:slug', (req, res, next) => {
  const { params: { slug } } = req;

  findBySlug(slug, singlePost => {
    if (!singlePost || singlePost.length === 0) {
      res.status(404).send({
        error: true,
        message: 'Post not found'
      });
    } else {
      res.json({
        response: [singlePost]
      });
    }
  });
});

router.post('/post', (req, res, next) => {
  const { title, content } = req.body;

  createPost(title, content, (data, error = false) => {
    if (error) {
      res.status(404).send({
        error: true,
        message: data
      });
    } else {
      res.json({
        response: {
          saved: true,
          post: data
        }
      });
    }
  });
});

router.delete('/post/:slug', (req, res, next) => {
  const { params: { slug } } = req;

  removePost(slug, (removed, error) => {
    if (error) {
      res.status(404).send({
        error: true,
        message: 'There was an error trying to remove this post'
      });
    } else {
      res.json({
        response: {
          removed: true
        }
      });
    }
  });
});

router.put('/post/:slug', (req, res, next) => {
  const {
    params: {
      slug
    },
    body: {
      title,
      content
    }
  } = req;

  updatePost(slug, title, content, (affected, error) => {
    if (error) {
      res.status(404).send({
        error: true,
        message: 'There was an error trying to update this post'
      });
    } else {
      res.json({
        response: {
          updated: true,
          affected
        }
      });
    }
  });
});

export default router;
