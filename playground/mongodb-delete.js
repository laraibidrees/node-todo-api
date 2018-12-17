// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return  console.log('Unable to connect to mongodb server');
  }
  console.log('Success! Connected to mongodb server ');
const db =client.db('TodoApp')

//deletemany
// db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result) => {
// console.log(result);
// })


//deleteone
// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
//   console.log(result);
// })



//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//   console.log(result);
// } )

db.collection('Users').findOneAndDelete({
  _id: new ObjectID('5c133ebeacca566924ecddea')
}).then((result) => {
  console.log(result);
});

client.close();
});
