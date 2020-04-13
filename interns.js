var assert = require('assert'); 
const insertMovies =(db,callback) => {
    const collection = db.collection('myMovies');
    collection.insertMany([
    {movie: "The Banker", year: "2020", rating: 8},
    {movie: "Bad Boys", year: "2020", rating: 7}, 
    {movie: "The Hunt", year: "2020", rating: 7}, 
    {movie: "Bloodshot", year: "2020", rating: 7.5}, 
    {movie: "First Cow", year: "2020", rating: 6.5} ],
function(err, result) {
    assert.equal(err, null);
    assert.equal(5, result.result.n);
    assert.equal(5, result.ops.length);
    console.log(result);
    callback(result);
});
};

module.exports = insertMovies;
  
  const MongoClient = require('mongodb');
  
  const url = 'mongodb://localhost:27017/interns';
  
  MongoClient.connect(url, (error, database) => {
    if (error) throw error;
    console.log('Connection is okay');
  
    const db = database.db('interns');
    insertMovies(db, () => {});
  });