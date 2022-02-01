
const dbConnect = require('./mongodb')

let deleteData =async ()=>{
    let data = await dbConnect();
    let result =await data.deleteOne({name:'Asadullah'})
    console.log(result.acknowledged);
}

module.exports = deleteData;