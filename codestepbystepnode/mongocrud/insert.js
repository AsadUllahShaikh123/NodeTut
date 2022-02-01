
const dbConnect = require('./mongo')

const insertData = async ()=>{
   let data = await dbConnect();
   let insert = await data.insertOne({name:'M Yasir',email:'yasir12@gmail.com',address:'moro'})
   console.log(insert.acknowledged);
}

module.exports = insertData;