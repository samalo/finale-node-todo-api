//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp3', (err, client) => {
  if(err){
   return console.log('Unable to connect to mongodb client');
  }

  console.log('Connected to mongodb server');
  const db = client.db('TodoApp3');

  // db.collection('todos').find({
  //   _id: new ObjectID('5cdf74ab06a1d35ef714c358')
  // }).toArray().then((docs) => {
  // console.log(JSON.stringify(docs, undefined, 2));
  // }, err => {
  //   console.log('Unable to fetch todos.');
  // });

  db.collection('todos').find().count().then((count) => {
  console.log(`Todos count: ${count}`);
  }, err => {
    console.log('Unable to fetch todos.');
  });


  //client.close();
});