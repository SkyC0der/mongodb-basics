var MongoClient = require('mongodb').MongoClient;

var url =  "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){

    if (err) throw err;
    var data = db.db("mydb")
    // create 'interns' collection in mydb database
    data.createCollection("interns", function(err, result) {
        if (err) throw err;
        console.log("Inerns collection created!");
        // close the connection to db when you are done with it
        db.close();
    });
});