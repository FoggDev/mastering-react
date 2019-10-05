import slugFn from 'slug';
import Post from '../models/post';

export function createPost(title, content, callback) {
  const newPost = new Post({
    title,
    content
  });

  newPost.addAuthor('Carlos Santana');

  newPost.save(error => {
    if (error) {
      console.log('ERROR:', error);
      callback(error, true);
    }

    console.log('Post saved correctly');
    callback(newPost);
  });
}

export function updatePost(slug, title, content, callback) {
  const updatedPost = {
    title,
    content,
    slug: slugFn(title, { lower: 'on' })
  };

  Post.update({ slug }, updatedPost, (error, affected) => {
    if (error) {
      console.log('Update error:', error);
      callback(error, true);
    }

    console.log('Post updated correctly');
    callback(affected);
  });
}

export function removePost(slug, callback) {
  Post.remove({ slug }, error => {
    if (error) {
      console.log('Remove error:', error);
      callback(error, true);
    }

    console.log('Post removed correctly');
    callback(true);
  });
}

export function findAllPosts(callback) {
  Post.find({}, (error, posts) => {
    if (error) {
      console.log('No posts', posts);
      return false;
    }

    console.log('All posts:', posts);
    callback(posts);
  });
}

export function findBySlug(slug, callback) {
  Post.find({ slug }, (error, post) => {
    if (error) {
      console.log('Not found:', error);
      return false;
    }

    console.log('Found post:', post);
    callback(post);
  });
}
