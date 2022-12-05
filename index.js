var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "edu"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("Select * From holidays where date_from='2021-01-09'", function (err, result, fields) {
        if (err) throw err;
        console.log('err :', err);        
        console.log('result :', result[0].id);
        console.log('result :', result[0].title);
        //  console.log('fields :', fields);
    })
    console.log("Connected!");
});