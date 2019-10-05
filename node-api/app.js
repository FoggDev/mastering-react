import express from 'express';
import path from 'path';
import mongoose from 'moongose';
import bodyParser from 'body-parser';

import apiController from './controllers/api';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose Connection
mongoose.connect('mongodb://localhost/blog');

// Controllers
app.use('/api', apiController);

app.listen(3000);
