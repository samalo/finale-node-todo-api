var mongoose = require('mongoose');
//User model
var User = mongoose.model('User', {

  email: {
   type: String,
   required: true,
   minlength: 1,
   trim: true
  }
});

// var newUser = new User({
//   email: '    smhonds@gmail.com!'
// });


// newUser.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log('Could not save email of user');
// });

module.exports = {User};