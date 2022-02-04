
const express = require('express')

require('./config');

const staff = require('./staff')

const app = express();

app.use(express.json())

// ----------------------------------------

// Data inserted in Mongodb 

// --------------------------------------

// app.post('/create',async (req,resp)=>{
//   await staff.create(req.body);
//   resp.send({Datainserted:'Yes'});
// })

// ------------ Getting the Data without passing giving any schema is possible ------------

// app.get('/get', async (req,resp)=>{
//     let data = await staff.find();
//     resp.send(data);
// })

// ------------- Deleting the Data ----------- 
// app.delete('/delete/:name',async (req,resp)=>{
  
//   let result = await staff.deleteOne(req.params)
//   resp.send({ deleted : result.deletedCount});

// })


// app.put('/update/:name', async (req,resp)=>{

//    let result = await staff.updateOne(req.params,{$set:{name:'Azhar'}});
//    resp.send({resultUpdated : result.acknowledged})
// })


// ---------- Searching with Single Field or Multiple Field incomplete -------------


// app.get('/search/:name', async (req, resp)=>{
//   let result = staff.find(
//     {
//       "$or":[
//         {"name":{$regex : req.params.name}},

//     ]
//     }
//   )
// })


// app.listen(5000);




