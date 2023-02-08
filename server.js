require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const contacRoute = require('./routes/contactRoutes');

const app = express();

// createing the middleware
app.use(express.json());
app.use(cors());

app.use('/', contacRoute);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server listening to port ${port}`));
