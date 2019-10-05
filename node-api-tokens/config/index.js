export default {
  db: {
    dialect: 'mysql',
    host: 'localhost',
    database: 'blog',
    user: 'root',
    password: '12345678'
  },
  security: {
    secretKey: 'K10zc0',
    expiresIn: '15s'
  }
}
