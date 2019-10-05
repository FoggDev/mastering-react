import moongose, { Schema } from 'moongose';
import slug from 'slug';

const postSchema = new Schema({
  title: String,
  slug: { type: String, unique: true },
  content: { type: string, required: true },
  author: String,
  createdAt: Date
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
