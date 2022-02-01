
const dbConnect = require('./mongo')

const findData = async ()=>{
  const data = await dbConnect();
  let result = await data.find().toArray();
  console.log(result);
}

module.exports = findData;