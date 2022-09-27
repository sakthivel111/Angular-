express = require('express');
app = express();
cors = require("cors");
app.use(cors());
app.use(express.json());
var mysql = require('mysql');



//MSQL connections

var database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Angular_database'
});

//crud Opration

//get all datas
app.get('/user' ,(req,res)=>{

    let getoperation= 'select * from table_name ';
    database.query(getoperation,(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log('kkkkkkkkkkkkkkkkkkkkkkk',result)
        res.send(result) // frent end view
    })
})


//single data display input boxs
app.get('/userId/:id' ,(req,res)=>{

    let getoperation= 'select * from table_name where id = ?';

    database.query(getoperation,[req.params.id], (err,result)=>{
        if(err){
            console.log(err)
        }
        //console.log('kkkkkkkkkkkkkkkkkkkkkkk',result)
        res.send(result) // frent end view
    })
})


//create
app.post('/insert',(req ,res)=>{
    data=req.body
    console.log(req.body)
    let sql='insert into table_name (name,age,job) values(?,?,?)'
    database.query(sql, [data.name,data.age,data.job], (err,result)=>{
  if(err){
    console.log(err)
  }

  res.send({
    msg: 'inserted sucess'
  })
  console.log('Inserted successfully' ,result)

    })

})

//cecking the data base connection
database.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
    } else {
        console.log('connected as id ' + database.threadId);
        console.log('database conected')
    }
})


// port (server)
app.listen(3000, () => {
    console.log('Server is running')
})





