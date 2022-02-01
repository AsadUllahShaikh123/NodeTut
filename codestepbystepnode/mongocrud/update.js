

const dbConnect = require('./mongo')

const updateData =async ()=>{
  let data = await dbConnect();
  let result = await data.updateOne(
    {name:'M Yasir'},
    {$set:{name:'Muhammad yasir'}}
    )
  console.log(result.acknowledged);
}

module.exports = updateData;