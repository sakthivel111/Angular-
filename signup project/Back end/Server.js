express = require("express")
app = express();
cors = require("cors");
app.use(cors());
app.use(express.json());
var mysql = require('mysql2');
var bcrypt = require('bcryptjs');
jwt = require("jsonwebtoken")
var nodemailer = require('nodemailer');

app.post('/signup', async (req, res) => {
    data = req.body
    //console.log(data) //email,password
   // var token = jwt.sign({ email: data.email }, 'secretKeySak', { expiresIn: '2m' });
    var hashedpassword = await bcrypt.hash(data.password, 10);

    check = "select * from Angular_table where email=?"
    connection.query(check, [data.email], (err, result) => {
        //console.log(',,,,,,,,,,,,,,,,,' ,result)
        if (err) {
            res.send('errrrrrrrrrr')
        } else {
            if (result.length == 0) {

                sql = "insert into user_data(name,email,password,token,verification) values(?,?,?,?,?);"
                connection.query(sql, [data.email,hashedpassword, token, 0], (err, result) => {

                    if (err) {
                        res.send({ message: 'Something went wrong' });
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
                            <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<a href="http://127.0.0.1:5501/verification.html?token=${token}">click me</a>

</body>
</html> `

                        }
                        smtpTransport.sendMail(mailOptions, function (error, response) {
                            if (error) {
                                console.log(error);
                            } else {
                                res.send({ message: 'check mail' });
                            }
                        });

                        //res.send({message: 'insert success'})

                    }
                });

            } else {
                if (result[0].verification == 0) {
                    res.send({ message: 'Go to check your' });

                     }     else {
                    res.send({ message: 'User alredy exist go to login page' });
                }
            }
        }
    })
})


app.get('/verfy', (req, res) => {
    var token = req.query.token;
    sql = `select * from user_data where token=?`

    connection.query(sql, [token], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length != 0) {
                updatequre = `update user_data set  token=null, verification=1 where token=?`
                connection.query(updatequre, [token], (err, result) => {
                    console.log(updatequre)
                    res.send('verified sucessfully')
                })
            } else {
                res.send('err')
            }
        }
    });
});

























//insert--------------------------------------------------------------------------------
// app.post('/insert', (req, res) => {
//     data = req.body;
//     //console.log(data);
//     sql = 'insert into Angular_table(name, email, password ) values(?,?,?)';
//     connection.query(sql, [data.name, data.email, data.password], (err, result) => {
//         if (err)
//             console.log(err);

//         console.log(result,'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     })
//     res.send(' Insert sucess')
// })



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