
const {MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017' 

const client = new MongoClient(url);

const dbConnect = async ()=>{
  let data = await client.connect();
  let db = data.db('school');
  let collection = db.collection('student');
  return collection; 
}

module.exports  = dbConnect;