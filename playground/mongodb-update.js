//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp3', (err, client) => {
  if(err){
   return console.log('Unable to connect to mongodb client');
  }

  console.log('Connected to mongodb server');
  const db = client.db('TodoApp3');

  //deleteMany
  // db.collection('todos').deleteMany({text: 'Teach Maths'}).then((result) => {
  //  console.log(result);
  // });

  //deleteOne
  // db.collection('todos').deleteOne({text: 'Find new job'}).then((result) => {
  //   console.log(result);
  //  });

  //findOneAndDelete
  db.collection('todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
   });


  //client.close();
});