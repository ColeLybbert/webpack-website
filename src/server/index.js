var path = require('path')
const express = require('express')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/lang', (req, res) => {
    console.log('Data Received');
    res.send(projectData);
})

app.post('/lang', (req, res) => {
    projectData = req.body;
    console.log(projectData);
})
