const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const con = require('./DB/conection')
var apiRoutes = require('./routes/index')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))
app.use('/', apiRoutes)

app.get('/', (request, response) => {
    console.log(request);
    response.send('Hello word')
});

app.listen(3000, () => console.log('Server Nodemon running... / port:3000'))