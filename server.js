const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('path');

// Run the app by serving the static files
// in the dist directory
app.use(cors());
// const forceSSL = function () {
//     return function (req, res, next) {
//         if (req.headers['x-forwarded-proto'] !== 'https') {
//             return res.redirect(
//                 ['https://', req.get('Host'), req.url].join('')
//             );
//         }
//         next();
//     }
// }
// app.use(forceSSL());

app.use(express.static(__dirname + '/dist/angulardemo'));
// Start the app by listening on the default
// Heroku port
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// });
app.get('/getdatas', function (req, res) {
    fs.readFile('dummydatas/data.json', (err, data) => {
        if (err) throw err;
        let student = JSON.parse(data);
        res.send(student);
    });
});
app.listen(process.env.PORT || 3000);