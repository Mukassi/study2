const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.get('/tasks', (req,res) => {
    res.send('list of all task')
})

app.post('/addTask', (req,res) => {
    const ADD_QUERY = `insert into todotask.tasks (tasks) VALUES (${req.body.task})`;
    connection.query(ADD_QUERY, (err) => {
        if(err) console.log(err)
    })
    res.send('You can add task')
})

app.get('/delete', (req,res) => {
    res.send('delete task')
})
app.listen(4000, () => {
    console.log('runing on port 4000')
})