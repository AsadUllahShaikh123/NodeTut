
const express = require('express')

require('./config');

const staff = require('./staff')

const app = express();

app.use(express.json())

app.post('/create',async (req,resp)=>{
  staff.create(req.body);
  resp.send({Datainserted:'Yes'});
})

app.listen(5000);


