var path = require('path')
const express = require('express')
const cors = require('cors')
const app = express();

app.use(express.static('dist'))
app.use(cors())
app.use(express.json())

console.log(__dirname)

const port = 8000;
const server = app.listen(port, listening);

function listening() {
    console.log(`running on localhost:${port}`);
}

app.get('/lang', (req, res) => {
    console.log('get request for data came in!Send the tracked object');
    res.send(projectData);
})
//POST request comes in, this handles it
app.post('/lang', (req, res) => {
    projectData = req.body;
})



