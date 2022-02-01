
const dbConnect = require('./mongo')

const deleteData =async ()=>{
  let data = await dbConnect();
  let result = await data.deleteOne({name:'asad'});
  if(!result.deletedCount){
    console.log('No data found');
  }
}

module.exports = deleteData;