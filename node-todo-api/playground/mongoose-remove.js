const {ObjectID} = require('mongodb')

const mongoose = require('./../server/db/mongoose');
const Todo = require('./../server/models/todo');
const User = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove("5affe71e037faa3c48dda866").then((todo) => {
    console.log(todo)
})