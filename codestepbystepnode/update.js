
const dbConnect = require('./mongodb')

const update =async ()=>{
    let data =await dbConnect();
    let update = data.updateOne(
      {name:'AsadUllah'},
      { $set:{name:'Asadullah',email:'asadullahshaikh713@gmail.com'} }
      
      )
    console.log((await update).acknowledged);
}

module.exports = update;