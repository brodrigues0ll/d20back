require('dotenv').config();
const app = require('./app');

const port = process.env.SERVER_PORT;

app.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});


app.listen(port, () => console.log('ouvindo porta', port));