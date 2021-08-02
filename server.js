const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI || config.get('mongoURI'), {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('> MongoDB Connected...'))
  .catch((err) => console.log(err));

// Serve Static files assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set Static folder
  app.use(express.static('client/build'));
  // Any requests that we haven't specified with express
  // will re route here
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.use('/api/products', require('./routes/api/products'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/wishlist', require('./routes/api/wishlist'));

app.listen(PORT, () => console.log(`> Server started at ${PORT}`));
