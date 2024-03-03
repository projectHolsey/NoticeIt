const fs = require('fs');
const express = require('express');
const http = require('http');
const path = require("path");


function construct_elements() {
    
}

fs.readFile('test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

const app = express();
app.use(express.json());
app.use(express.static("express"));// default URL for website
app.use(express.static(__dirname));
app.use('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/app.html'));
    //__dirname : It will resolve to your project folder.
}); const server = http.createServer(app);
const port = 3000;
server.listen(port);
