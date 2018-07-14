const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },(err,client)=>{
  if(err)
  {
    return console.log('unable to connect to database');
  }
   console.log('successfully connected to client');
   db =client.db('TOdoApp');
   db.collection('Todos').deleteMany({text:'eat lunch'}).then((result)=>{
     console.log(result);
   })
client.close();
});
