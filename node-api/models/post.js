import mongoose, { Schema } from 'mongoose';
import slug from 'slug';

const postSchema = new Schema({
  title: String,
  slug: { type: String, unique: true },
  content: { type: String, required: true },
  author: String,
  createdAt: Date
}, {
  versionKey: false
});

postSchema.methods.addAuthor = function(author) {
  this.author = author;

  return this.author;
}

postSchema.pre('save', function(next) {
  this.slug = slug(this.title, { lower: 'on' });
  this.createdAt = Date.now();

  next();
});

const Post = mongoose.model('Post', postSchema);

export default Post;
