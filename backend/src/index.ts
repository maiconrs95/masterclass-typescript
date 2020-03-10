import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('First GET'));

app.listen(3333, () => console.log('Server online on port 3333!'));
