const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,client)=>{
  if(err)
  {
    return console.log('unable to connect to database');
  }
   console.log('successfully connected to client');
//   db=client.db('TOdoApp');
//   db.collection('Todos').insertOne({
//      text:'complte mongodb',
//      completed:false
//   },(err,result)=>{
//     if(err){
//     return console.log('Unable to insert todo',err);
//   }
// console.log(JSON.stringify(result.ops,undefined,2));
// });
db =client.db('TOdoApp');
db.collection('Users').insertOne({
  name:'laxman',
  id:1
},(err,result)=>{
  if(err)
  {
    console.log('Unabele to insert user info',err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});
client.close();
});
