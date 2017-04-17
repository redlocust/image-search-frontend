const express = require('express');
const path = require('path');

const app = express();

const apiRouter = require('./app_api/routes/main');


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static(path.join(__dirname, '/public')));
app.use('/api', express.static(path.join(__dirname, '/app_api')));

app.use('/api', apiRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
