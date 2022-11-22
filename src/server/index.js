var path = require('path')
const express = require('express')

const app = express();

app.use(express.static('dist'))

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
    console.log(projectData);
})



