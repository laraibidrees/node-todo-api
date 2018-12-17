// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return  console.log('Unable to connect to mongodb server');
  }
  console.log('Success! Connected to mongodb server ');
const db =client.db('TodoApp')
// db.collection('Todos').insertOne({
// text: 'Something to do',
// completed: false
// },(err, result) => {
// if (err) {
//   return console.log('Unable to insert Todo', err);
// }
// console.log(JSON.stringify(result.ops, undefined, 2));
// })

// Insert new dic into users {name,age, location}

// db.collection('Users').insertOne({
// name: 'Laraib Idrees',
// age: '22',
// location: 'Pakistan'
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to Insert todo',err);
//   }
//   console.log(result.ops[0]._id.getTimestamp());
//
// });

// db.collection('Todos').find().count().then((count) => {
//   console.log(`Todos count: ${count}`);
// }, (err) => {
//   console.log('Unabe to fetch todos', err);
// });

db.collection('Users').find({name: 'Kiki Camarena'}).toArray().then((docs) => {
console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
console.log("there was an error", err);
})

// client.close();
});
