//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //Object destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp3', (err, client) => {
  if(err){
   return console.log('Unable to connect to mongodb client');
  }

  console.log('Connected to mongodb server');
  const db = client.db('TodoApp3');


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5cdf6e8b61569338b4c38923')

  },
  {
    $set: {
      name: 'Mike Muzata'
    },

    $inc:{
        age: 1
    }
  },
  {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //findOneAndUpdate

  // db.collection(todos).findOneAndUpdate({
  //   _id: new ObjectID('5cdf868206a1d35ef714c8f9')

  // },
  // {
  //   $set: {
  //     completed: false
  //   }
  // },
  // {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


  //client.close();
});