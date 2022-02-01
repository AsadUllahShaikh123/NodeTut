
const dbConnect = require('./mongodb')


const insertData = async ()=>{
  let data = await dbConnect();
  let result =await data.insertMany([
    {name:'Asadullah',email:'asadullahshaikh713@gmail.com',address:'moro'} 
  ])
  console.log(result.acknowledged);  
}

module.exports = insertData;