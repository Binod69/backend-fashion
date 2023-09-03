require('dotenv').config();
const express = require('express');
const app = express();

//ROUTES
const routes = require('./routes/index');
app.use('/api/v1', routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, (err) => {
  if (err) {
    console.log('error connecting to:' + PORT);
  } else {
    console.log('server connected to:' + PORT);
  }
});
