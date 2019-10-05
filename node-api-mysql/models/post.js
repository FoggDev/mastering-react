import Sequelize from 'sequelize';
import slugFn from 'slug';

import config from '../config';

export const db = new Sequelize(config.db.database, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: config.db.dialect,
  operatorAliases: false
});

export const queryType = {
  type: Sequelize.QueryTypes.SELECT
};

const Post = db.define('posts', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The title is empty'
      }
    }
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'The slug is empty'
      }
    }
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'The content is empty'
      }
    }
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Who is the author?'
      }
    }
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
});

export default Post;
