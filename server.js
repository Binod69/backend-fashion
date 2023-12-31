require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

//ROUTES
const routes = require('./routes/index');
app.use('/api/v1', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.log('error connecting to:' + PORT);
  } else {
    console.log('server connected to:' + PORT);
  }
});
