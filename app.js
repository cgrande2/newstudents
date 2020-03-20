'use strict';

const express = require('express');
const app = express();

const student = require('./routes/student');

app.use(express.json());
app.set('port', process.env.port || 6969);

app.use('/student', student)

app.listen(app.get('port'), () => console.log(`listening on ${app.get('port')}`))

