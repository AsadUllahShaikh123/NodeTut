
const {MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017'

const client = new MongoClient(url)

const dbConnect =async ()=>{
  const data = await client.connect();
  const db = data.db('school')
   return db.collection('student')
  
}

module.exports = dbConnect;