const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type : String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'Do Laundry',
  completed: false,
  completedAt: 124
});

newTodo.save().then((doc) => {
console.log('Saved Todo', doc);
}, (e) => {
  console.log('Failed to save todo');
});
