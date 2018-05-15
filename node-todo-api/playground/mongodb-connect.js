// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

// let objectid = new ObjectID();
// console.log(objectid)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('connect to MongoDB server')

    // db.collection('Todos').insertOne({
    //     text: 'sth here',
    //     completed: false
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unabale to insert todos', error)
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // });

    db.collection('Users').insertOne({
        name: 'Hamed Fathi',
        age: 21,
        location: 'Karaj'
    }, (error, result) => {
        if (error) {
            return console.log('Unabale to insert todos', error)
        }
        console.log(result)
        console.log(JSON.stringify(result.ops, undefined, 2))
    });

    db.close()
});