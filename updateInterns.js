const updateMovieNames = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('myMovies');
    // Update some movies
    var myquery = { movie:"The Banker" };
    var newvalues = { $set: {movie: "Miracle in Cell No 7", year: "2019", rating: "8" } };
    collection.updateOne(myquery, newvalues, function(err, result) {
        assert.equal(err, null);
        console.log(result.result.nModified + " document(s) updated");
        callback(result);
    });}; 

const MongoClient = require('mongodb');
var url =  "mongodb://localhost:27017/mydb";
const assert = require('assert');

MongoClient.connect(url, (error, database) => {
    if (error) throw error;
    console.log("Connected");
    const db = database.db('interns');
    updateMovieNames(db, () => {});
});

module.exports = updateMovieNames;