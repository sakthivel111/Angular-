express = require("express")
app = express();
cors = require("cors");
app.use(cors());
app.use(express.json());
var mysql = require('mysql2');
var bcrypt = require('bcryptjs');
jwt = require("jsonwebtoken")
var nodemailer = require('nodemailer');

// port (server)
app.listen(3000, () => {
    console.log('Server is running')
});
//sql connection

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'Angulardatabase'

});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
    } else {
        console.log('connected as id ' + connection.threadId);
        console.log('database conected')
    }
})


//insert--------------------------------------------------------------------------------
app.post('/insert', (req, res) => {
    data = req.body;
    console.log(data);
    check = "select * from Angular_table where email=?"
    connection.query(check, [data.email], async (err, result) => {
        console.log('lkfdfkerkkkkkkkkkkk', result) //empt array
        if (err) {
            res.send('errrrrrrrrrr')
            console.log('')
        } else {
            if (result.length == 0) {

                let token = jwt.sign({ email: data.email }, 'secretKeySak', { expiresIn: '2m' });
                let hashedpassword = await bcrypt.hash(data.password, 10);

                sql = 'insert into Angular_table(name, email, password,token,verify) values(?,?,?,?,?)';
                connection.query(sql, [data.name, data.email, hashedpassword, token, 0], (err, result) => {
                    if (err) {
                        console.log('kssssssssssssssssss', err);
                    }
                    else {
                        // console.log('//////////////////',result[0])
                        text = data.email;
                        var from = "finsteindev@gmail.com";
                        var to = text;

                        var smtpTransport = nodemailer.createTransport({
                            // service: "Gmail",
                            host: 'smtp.mailtrap.io',
                            auth: {
                                // user: "finsteindev@gmail.com",
                                // pass: "nnwgkdwsvtxbsmjc"
                                user: "27d06c67b7066e",
                                pass: "db6ddea5053827"
                            }
                        });
                        var mailOptions = {
                            from: "finsteindev@gmail.com",
                            to: text,
                            subject: from + '| new message !',
                            html: `
<html>
<head>
</head>
<body>
<a href="http://localhost:4200/verify/?token=${token}">click me</a>
</body>
</html> `
                        }
                        smtpTransport.sendMail(mailOptions, function (error, response) {
                            if (error) {
                                console.log(error);
                            } else {
                                res.json({ message: 'verify Your emaill' })
                            }
                        });
                        res.json({ message: 'verify Your emaill' })
                    }
                })

            } else {

                // console.log('User Already exist')
                res.json({ message: 'User Already exist ' })

            }
        }
    })
})
//verify Update verifycation

app.get('/verify',(req, res) => {
    let token = req.query;
    console.log(token,'akkkkkkkkkkkkkkkkkkkkkkkk')
    sql = `select * from Angular_table where token=?`

    connection.query(sql, [token], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length != 0 ) {
                updatequre = `update Angular_table set  token=null, verify=1 where token=?`
                connection.query(updatequre, [token], (err, result) => {
                    if(err){
                        console.log(err)
                    }else{
                        console.log('update option',result)   
                    }             
                })
            } else {
                res.send('err')
                console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrrr' ,"mmmm" )
            }
        }
    });
    res.send('verified sucessfully')
   
});


