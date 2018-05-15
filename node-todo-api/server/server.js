const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    complete: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

let newTodo = new Todo({
    text: 'cook dinner'
})

newTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (error) => {
    console.log('Unable to save todo')
})