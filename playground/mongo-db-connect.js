//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp3', (err, client) => {
  if(err){
   return console.log('Unable to connect to mongodb client');
  }

  console.log('Connected to mongodb server');
  const db = client.db('TodoApp3');

  // db.collection('todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Sam Mhondiwa',
  //   age: 38,
  //   location: 'Cape town'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert users', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});