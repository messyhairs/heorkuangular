const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./DB');
const moviesRoutes = require('./routes/movies.route');


// Run the app by serving the static files
// in the dist directory
app.use(cors());
app.use('/movie', moviesRoutes);
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist/angulardemo'));

// if (app.get("env") === "production") {
//     app.use(enforce.HTTPS({ trustProtoHeader: true }));
// }

// app.listen(port, function () {
//     console.log('Listening on port ' + port);
// });
// });

// Start the app by listening on the default
// Heroku port
// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
// });
// app.get('/getdatas', function (req, res) {
//     fs.readFile('dummydatas/data.json', (err, data) => {
//         if (err) throw err;
//         let student = JSON.parse(data);
//         res.send(student);
//     });
// });
app.listen(process.env.PORT || 8080)