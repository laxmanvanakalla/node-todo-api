const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,client)=>{
  if(err)
  {
    return console.log('unable to connect to database');
  }
   console.log('successfully connected to client');
   db =client.db('TOdoApp');
   // db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
   //   console.log('Todos');
   //   console.log(JSON.stringify(docs,undefined,2));
   // },(err)=>{
   //   console.log('unable to fetch todos');
   // })
   db.collection('Todos').find().count().then((count)=>{
     console.log('number of todos are',count);
   },(err)=>{
     console.log('unable to count todos');
   })
client.close();
});
