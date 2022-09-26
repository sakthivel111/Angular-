express = require('express');
app = express();
cors = require("cors");
app.use(cors());
var mysql = require('mysql');

;

//MSQL connection

var database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Angular_database'
});

//crud Opration

//get all datas
app.get('/user' ,(req,res)=>{

    let getoperation= 'select * from table_name';
    database.query(getoperation,(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log('kkkkkkkkkkkkkkkkkkkkkkk',result)
        res.send(result) // frent end view
    })
})

//get single data
app.get('/users' ,(req,res)=>{

    let getoperation= 'select id from table_name  ';
    database.query(getoperation,(err,result)=>{
        if(err){
            console.log(err)
        }
        
        res.send(result) // frent end view
    })
})

//create
app.post('creat',(req ,res)=>{
    console.log(req.body)
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