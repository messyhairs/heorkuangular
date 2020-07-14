const express = require('express');
const app = express();
const fs = require('fs');

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist/angulardemo'));
// Start the app by listening on the default
// Heroku port
app.get('/getdatas', function (req, res) {
    fs.readFile('dummydatas/data.json', (err, data) => {
        if (err) throw err;
        let student = JSON.parse(data);
        res.send(student);
    });
});
app.listen(process.env.PORT || 8080);