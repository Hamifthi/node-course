const {ObjectID} = require('mongodb')

const mongoose = require('./../server/db/mongoose');
const Todo = require('./../server/models/todo');
const User = require('./../server/models/user')

let id = '5afd69def7a221082400c2fb';
let differentID = '5afd69ebf7a221082400c2fc';

if (!ObjectID.isValid(id)) {
    console.log('ID is not valid')
}

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo)
// });

// Todo.findById(differentID).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo By Id', todo)
// }).catch((error) => {
//     console.log('Wrong Id', error)
// });

User.findById('5afada94ccd45209103650d0').then((user) => {
    if (!user) {
        console.log('user not found')
    }

    console.log(JSON.stringify(user, undefined, 2))
}, (error) => {
    console.log(error)
})