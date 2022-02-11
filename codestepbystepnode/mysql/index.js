
// const mysql = require('mysql')

// //  to create the connection 
// const con = mysql.createConnection({
//   host:'localhost',
//   user:'root',
//   password:'',
//   database:'test'
// });
// // just to check either it is connected or not 
// con.connect((err)=>{
//   if(err)
//     console.log(err);
//   else
//   console.log('connectd');
// })

// con.query('select * from user',(err,result)=>{
//   console.log("result",result);
// })



// ----------------- Get Api with MySQL  -------------------

// const con = require('./config');

// const express = require('express');
// const app = express();

// app.get('/',(req,resp)=>{
//    con.query('select * from practice',(err,result)=>{
//      if(err){
//        resp.send(err)
//      }
//      else
//      resp.send(result);
//    })
// })

// app.listen(5000)

// ----------------- Post Api with MYSQL -----------

// const express = require('express');
// const con = require('./config');

// const app = express();

// app.use(express.json());

// app.post('/', (req, resp) => {


//   // static data insertion 
//   // const data = {Name:'Azhar Ali',Rollno:'2k21CSE35',Year:2024} 

//   // data insertion through postman 
//   // const data = req.body;

//   con.query('Insert into practice SET ?', data, (err, result, field) => {
//     if (err) err;
//     else resp.send('sendData ');
//   })
//   resp.send('sending Data')


// })

// app.listen(5000);


// -------------- PUT API with MYSQL ---------

// const express = require('express');

// const con = require('./config')

// const app = express();

// app.use(express.json())

// app.put('/:id',(req,resp)=>{

//   // Static data updation 
//   // const updatedData = [2022,3]

//   // dynamic data updation 
//   const updatedData = [req.body.Rollno,req.params.id]

//   con.query('update practice set Rollno = ? where id = ?',updatedData,(err,result,fields)=>{
//     if(err) throw err;
//     else resp.send('updated Data');
//   })
//   resp.send('rollno updated')
// })

// app.listen(5000);


// -------- DELETE API With MYSQL ------------


const express = require('express')

const con = require('./config')

const app = express();

app.use(express.json())


app.delete('/:id',(req,resp)=>{

  con.query('delete from practice where id = '+ req.params.id,(err,results)=>{
    if(err) throw err 
    resp.send(results);
  })
})

app.listen(5000);