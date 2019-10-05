import Sequelize from 'sequelize';
import { db, queryType } from '../models/db';

export function login(username, password, callback) {
  db.query(`
    SELECT * FROM users
      WHERE username = '${username}' AND password = '${password}'
  `, queryType)
  .then(data => callback(data));
}
