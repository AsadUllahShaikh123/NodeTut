
let mongoose = require('mongoose')

let main=async()=>{
  await mongoose.connect('mongodb://localhost:27017/school');

  let ProductSchema = new mongoose.Schema({
    name:String,
  })

  const ProductsModel =  mongoose.model('staff',ProductSchema)
    
   await ProductsModel.create({name:'Asadullah'})
  let result = ProductsModel.updateOne({name:'Asadullah'},{$set:{name:'AzharAli'}})
  
  console.log((await result).acknowledged);
}

main();