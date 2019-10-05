import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import apiController from './controllers/api';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose Connection
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });

// Controllers
app.use('/api', apiController);

app.listen(3000);
