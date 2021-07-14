const express = require('express');
const dotenv = require('dotenv');

const colleges = require('./routes/colleges')
// config
dotenv.config({
    path: './config/config.env'
});
// express app
const app = express();


// Routes middleware
app.use('/api/v1/colleges', colleges)


// PORT
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})