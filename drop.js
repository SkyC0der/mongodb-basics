const drop = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('myMovies');
    // Find some good movies
    collection.drop(function(err,delOK){
        if (err) throw err;
    if (delOK) console.log("Collection deleted");
    });
};

const MongoClient = require('mongodb');
var url =  "mongodb://localhost:27017/mydb";
const assert = require('assert');

MongoClient.connect(url, (error, database) => {
    if (error) throw error;
    console.log('Connection is okay');
    const db = database.db('interns');
    drop(db, () => {});
});