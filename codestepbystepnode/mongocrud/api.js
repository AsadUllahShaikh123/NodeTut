// get Basic Api with mongodb


// const express = require('express')
// const dbConnect = require('./mongo')

// const app  = express();

// app.get('/',async (req,resp)=>{
//   let  data = await dbConnect();
//   data = await data.find().toArray();
//   console.log(data);
//   resp.send(data);

// })

// app.listen(5000);



// Adding data to mongodb from postman


// const express = require('express')

// const dbConnect = require('./mongo')

// const app = express();

// app.use(express.json());

// app.post('/', async (req,resp)=>{
//    let data = await dbConnect();
//    let insert =await data.insertOne(req.body);
//    resp.send(insert)
// })

// app.listen(5000);



// Update Data in mongodb by postman 



// const express = require('express')

// const dbConnect = require('./mongo')

// const app = express();

// app.use(express.json())

//  using without passsing params 

// app.put('/',async (req,resp)=>{
//   let data = await dbConnect();
//   let update = data.updateOne({name:'Aaisha Bibi'},{$set:req.body})
//   resp.send({result:'updated'})
// })


// now using req.params

// app.put('/:name',async (req, resp)=>{
//   let data = await dbConnect();
//   let result = data.updateOne({name:req.params.name},{$set:req.body})
//   resp.send({result:"Updated"})
// })

// app.listen(5000);


// Deleting Data in mongodb

// if we want to delete any data with the help of its id then we have to consider 
// two things 1) we have to use _id and the second one while passing in the delete() we have
// to use new mongodb.ObjectId("id...") to delete the specific data  
 

// const express =require('express')

// const dbConnect=require('./mongo')

// const app = express();

// app.delete('/:name',async (req,resp)=>{
//   let data = await dbConnect();
//   let deleteData = data.deleteOne({name:req.params.name})
//   resp.send({result:'deleted'})
// })

// app.listen(5000);
