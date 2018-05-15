const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('connect to MongoDB server')

    // db.collection('Todos').deleteMany({text: 'test for deleting'}).then((result) => {
    //     console.log(result)
    // });

    db.collection('Todos').findOneAndDelete({completed: false}).then((object) => {
        console.log(object)
    });

    db.close();
});