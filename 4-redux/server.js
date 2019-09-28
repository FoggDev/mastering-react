import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();

app.use(cors({ credentials: true, origin: true }));

app.get('/api/coins', (req, res) => {
  const axiosPromise = axios.get('https://api.coinmarketcap.com/v1/ticker/');

  axiosPromise
    .then(response => res.json(response.data))
    .catch(err => res.json({ error: err }));
});

app.listen(4000, () => console.log('Server running'));
