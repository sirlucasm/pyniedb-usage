require('dotenv').config()
const express = require('express');
const cors = require('cors');

const app = express();
const routes = require('./src/routes');

const PORT = 3000 || process.env.PORT;
const URL = `${process.env.URL}${PORT}`;

app.use(cors());
app.use('/', routes);
app.listen(PORT, () => console.log(`\n listening on ${URL} \n`));
