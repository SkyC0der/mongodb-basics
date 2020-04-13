
const findFirstMovie = function(db, callback) {
    const collection = db.collection('myMovies');
    // Find some documents
    collection.findOne({},function(err, docs) {
    assert.equal(err, null);
    console.log("Found the first movie record");
    console.log(docs)
    callback(docs);
});};

const findGoodMovies = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('myMovies');
    // Find some good movies
    collection.find({rating: 7}).toArray(function(err, result) {
    if (err) throw err;
    assert.equal(err, null);
    console.log("Found some good movies! :-)"); 
    console.log(result)
    callback(result);
});}; 

const findMovieNames = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('myMovies');
    // Find some good movies
    collection.find({},{ projection: {_id: 0, year: 0, rating: 0}}).toArray(function(err, result) {
    if (err) throw err;
    assert.equal(err, null);
    console.log(result)
    callback(result);
});}; 

const MongoClient = require('mongodb');
var url =  "mongodb://localhost:27017/mydb";
const assert = require('assert');

MongoClient.connect(url, (error, database) => {
    if (error) throw error;
    console.log('Connection is okay');
    const db = database.db('interns');
     findFirstMovie(db, () => {});
     findGoodMovies(db, () => {});
     findMovieNames(db, () => {});

  });
  module.exports = findMovieNames
  module.exports = findFirstMovie;
  module.exports = findGoodMovies;