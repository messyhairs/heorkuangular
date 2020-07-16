const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Movies = new Schema({
    Title: {
        type: String
    },
    Type: {
        type: String
    },
    Year: {
        type: Number
    },
    Poster: {
        type: String
    }
}, {
    collection: 'Movies'
});

module.exports = mongoose.model('Movies', Movies);