var mongoose = require('mongoose');
//Todo model
var Todo = mongoose.model('Todo', {

  text: {
   type: String,
   required: true,
   minlength: 1,
   trim: true
  },
  commpleted:{
  type: Boolean,
  default: false
  },

  commpletedAt:{
  type: Number,
  default: null
  }

});

//  var newTodo = new Todo({
//   text: 'Cook dinner'
//  });

// newTodo.save().then((doc) => {
//   console.log('Saved to do', doc);
// }, (err) => {
//   console.log('Unable to save todo');
// });

// var newTodo = new Todo({
//   text: '    Edit this video!'
// });

// newTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log('Could not save todo');
// });

module.exports = {Todo};
