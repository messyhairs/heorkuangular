const express = require('express');
const app = express();
const moviesRoutes = express.Router();

// Require Business model in our routes module
let Movies = require('../models/movies');

// Defined store route
moviesRoutes.route('/postmovies').post(function (req, res) {
    let movie = new Movies(req.body);
    movie.save()
        .then(movie => {
            res.status(200).json({ 'movies': 'movies in added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
moviesRoutes.route('/getmovies').get(function (req, res) {
    Movies.find(function (err, movies) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(movies);
        }
    });
});

// // Defined edit route
// businessRoutes.route('/edit/:id').get(function (req, res) {
//     let id = req.params.id;
//     Business.findById(id, function (err, business) {
//         res.json(business);
//     });
// });

// //  Defined update route
// businessRoutes.route('/update/:id').post(function (req, res) {
//     Business.findById(req.params.id, function (err, next, business) {
//         if (!business)
//             return next(new Error('Could not load Document'));
//         else {
//             business.person_name = req.body.person_name;
//             business.business_name = req.body.business_name;
//             business.business_gst_number = req.body.business_gst_number;

//             business.save().then(business => {
//                 res.json('Update complete');
//             })
//                 .catch(err => {
//                     res.status(400).send("unable to update the database");
//                 });
//         }
//     });
// });

// // Defined delete | remove | destroy route
// businessRoutes.route('/delete/:id').get(function (req, res) {
//     Business.findByIdAndRemove({ _id: req.params.id }, function (err, business) {
//         if (err) res.json(err);
//         else res.json('Successfully removed');
//     });
// });

module.exports = moviesRoutes;