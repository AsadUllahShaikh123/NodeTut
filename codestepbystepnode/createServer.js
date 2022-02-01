
// const http = require('http');

// import chalk from 'chalk'

// http.createServer((req,res)=>{
//     res.write('<h1>Hello From Creating Server</h1>');
//     res.end();
// }).listen(6565)


// console.log(chalk.red('ro'));

// npm i nodemon

// console.log('Try nodemon with server node js');
// console.log(100+12);

// creating simple Api 
// 
// import http from 'http'
// import data from './data';


// const http = require('http');

// const data = require('./data')

// http.createServer((req,res)=>{
//   res.writeHead(200,{'Content-type':'application/JSON'})
//   res.write(JSON.stringify(data));
//   res.end();
// }).listen(5500)


// creating file through the command line arguments 

// const fs = require('fs');

// const input = process.argv;

// fs.writeFileSync(input[2],input[3])


// sum of the input from command line 

// const sum = input[2] + input[3];
// console.log(sum);



// Creating files through loop 

// making folder/ dir first 

// const fs = require('fs');
// const path = require('path')
// const dir = './tmp';

// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir, { recursive: true });
// }

// const dirname = path.join(__dirname,dir)

// for(let i = 0 ; i < 5 ; i++){
//       fs.writeFileSync(`${dirname}/hello${i}.text`, 'a simple text file');
// }

// fs.readdir(dirname,(err,files)=>{
//   files.forEach((items)=>{
//     console.log('file name is ' + items);
//   })
// })

// CRUD Operations 

// const fs = require('fs');
// const path = require('path')
// const dir = './crud'

// if(!fs.existsSync(dir)){
//   fs.mkdirSync(dir,{recursive:true})
// }

// const dirname = path.join(__dirname,dir)

// const fileName = `${dirname}/hello.txt`

// fs.writeFileSync(fileName,'Hello From CRUD Operation');

// fs.appendFile(fileName,'\nHelllo From Appending',(err)=>{
//   if(!err)
//     console.log('Updated File');
// })

// fs.appendFile(fileName,'\nHelllo From Appending/UPDATING',(err)=>{
//   if(!err)
//     console.log('Updated File');
// })

// fs.rename(fileName,`${dirname}/rename.txt`,(err)=>{
//   if(!err) console.log("Renamed the file easily");
// })

// fs.readFile(`${dirname}/rename.txt`,'utf8',(err,data)=>{
//   console.log(data);
// })


// How does Node.js works?

// console.log("Starting");

// setTimeout(() => {
//   console.log('Hello after 2 seconds');
// }, 2000);

// setTimeout(() => {
//   console.log('Hello After 1 seconds');
// }, 1000);

// setTimeout(() => {
//   console.log('Hello After 0 seconds');
// }, 0);

// console.log("Finished");

// console.log("Finsihed 1");
// console.log("Finsihed 2");
// console.log("Finsihed 3");
// console.log("Finsihed 4");
// console.log("Finsihed 5");



// const express = require('express')
// const app = express();

// app.get('', (req, res) => {
//   // console.log('data sent by browser is >>>> '+ req.query.name);
//   res.send(`
//   <h1>welcome From Home Page1</h1>
//   <a href='/about'>Go to about Page</a>
//   `)
// })

// app.get('/about', (req, res) => {
//   res.send(`
//   <h1>Hello From About Page</h1>
//   <a href='/'>Go to Home Page</a>
//   `)
// })

// app.get('/help', (req, res) => {
//   res.send([{
//     name: 'AsadUllah'
//   },
//   {
//     name: 'Azhar'
//   }])
// })

// app.listen(5000, () => {
//   console.log("hello From Clg2");
// });


// const path = require('path');
// const express = require('express')

// const filePath = path.join(__dirname,'public')

// const app = express(); 

// app.use(express.static(filePath));

// app.listen(5000);


// page navigations 

// const express = require('express')
// const path = require('path')

// const app = express();

// const filePath = path.join(__dirname,'public');

// app.set('view engine','ejs');
// app.get('/profile',(_,resp)=>{

//   const data = { 
//     name:'AsadUllah',
//     email:'asadullahshaikh713@gmail.com',
//     address:'Moro',
//     skills:['java','c++','React']
//   }

//   resp.render('profile',{data})
// })

// app.get('/',(_,resp)=>{
//   resp.sendFile(`${filePath}/index.html`)
// })

// app.get('/about',(_,resp)=>{
//   resp.sendFile(`${filePath}/about.html`)
// })

// app.get('/help',(_,resp)=>{
//   resp.sendFile(`${filePath}/help.html`)
// })

// app.get('*',(_,resp)=>{
//   resp.sendFile(`${filePath}/nopage.html`)
// })

// app.listen(5000)

//  application level middleware (middleware means to restrict the access)
// const express = require('express')

// const app = express();

// const reqFilter = (req,resp,next)=>{
//   if(!req.query.age){
//     resp.send('Please Provide Age')
//   }
//   else if(req.query.age < 18){
//     resp.send('You are not allowed to access this content')
//   }
//   else
//   {
//     next()
//   }
// }

// app.use(reqFilter)


// app.get('',(_,resp)=>{
//   resp.send('Hello From Home')
// })

// app.get('/about',(_,resp)=>{
//   resp.send('Hello From About')
// })

// app.listen(5000);


// Route Level or Single Route middleware 

// const express = require('express')

// const app = express();

// const reqFilter = (req,resp,next)=>{
//   if(!req.query.age){
//     resp.send('Please Provide Age')
//   }
//   else if(req.query.age < 18){
//     resp.send('YOu are under age');
//   }
//   else
//   {
//     next()
//   }
// }

// app.get('',(_,resp)=>{
//   resp.send("Hello From Home Page")
// })

// app.get('/about',(_,resp)=>{
//   resp.send("Hello From About Page")
// })

// app.get('/user',reqFilter,(_,resp)=>{
//   resp.send("Hello From User Page");
// })

// app.listen(5000)


// const express = require('express')
// const path = require('path')
// const route = express.Router()
// const app = express();



// const filePath = path.join(__dirname,'public')

// const reqFilter = (req,resp,next)=>{
//   if(!req.query.name){
//     resp.send('Provide your name ')
//   }
//   else
//     next()
// }

// route.use(reqFilter);


// app.get('',(_,resp)=>{
//   resp.sendFile(`${filePath}/index.html`)
// })

// route.get('/about',(_,resp)=>{
//   resp.sendFile(`${filePath}/about.html`)
// })

// app.get('/help',(_,resp)=>{
//   resp.sendFile(`${filePath}/help.html`)
// })

// app.listen(5000);


// const {MongoClient} = require('mongodb')
// const url = 'mongodb://localhost:27017';

// const client = new MongoClient(url);

// const getData = async ()=>{
//   let data = await client.connect();
//   let db = data.db('practice');
//   let collection = db.collection('collection');
//   let response = await collection.find({}).toArray()
//   console.log(response);
// }

// getData();



// const {MongoClient} = require('mongodb')

// const url = 'mongodb://localhost:27017';

// let client = new MongoClient(url)

// const getData =async ()=>{
//     let data = await client.connect();
//     let db = data.db('school');
//     let collection = db.collection('student');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();


// Read Data from mongodb  using separate files 

// ---------------------------------------
// const main = require('./find')
// main();


// ---------------------------------------------
//  insert Data to mongodb 

const insertData = require('./insert')

insertData();

// ---------------------------------------------
// update data 

// const update = require('./update')

// update();


// -------------------------------------------------
// delete data 

// const deleteData = require('./delete')

// deleteData();




