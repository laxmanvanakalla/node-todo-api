const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,client)=>{
  if(err)
  {
    return console.log('unable to connect to database');
  }
   console.log('successfully connected to client');
   db =client.db('TOdoApp');
   db.collection('Todos').findOneAndUpdate(
     {_id:new ObjectID('5b499e20730e4c039caf3bda')},
     {$set:{ completed:true}},
     {returnOriginal:false}).then((result)=>{
     console.log(result);
   })
client.close();
});
