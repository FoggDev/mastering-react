import slugFn from 'slug';
import Post, { db, queryType } from '../models/post';

export function createPost(title, content, callback) {
  db
    .sync()
    .then(() => {
      Post.create({
        title,
        slug: title ? slugFn(title, { lower: 'on' }) : '',
        content,
        author: 'Carlos Santana',
      }).then(insertedPost => {
        console.log('INSERTED POST===', insertedPost);
        callback(insertedPost.dataValues);
      }).catch(error => {
        console.log('CREATE ERROR', error);
        callback(error, false);
      });
    });
}

export function updatePost(slug, title, content, callback) {
  Post.update(
    {
      title,
      slug: slugFn(title, { lower: 'on' }),
      content
    },
    {
      where: { slug }
    }
  ).then(rowsUpdated => {
    console.log('UPDATED', rowsUpdated);
    callback(rowsUpdated);
  }).catch(error => {
    console.log('ERROR UPDATE', error);
    callback(error, false);
  });
}

export function removePost(slug, callback) {
  Post.destroy({
    where: {
      slug
    }
  }).then(rowDeleted => {
    console.log('DELETED', rowDeleted);
    callback(rowDeleted);
  }).catch(error => {
    console.log('ERROR DELETED', error);
    callback(error, false);
  })
}

export function findAllPosts(callback) {
  db.query('SELECT * FROM posts', queryType)
    .then(data => callback(data));
}

export function findBySlug(slug, callback) {
  db.query(`SELECT * FROM posts WHERE slug = '${slug}'`, queryType)
    .then(data => callback(data));
}
