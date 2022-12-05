var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "edu"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("Select * From holidays", function (err, result, fields) {
        if (err) throw err;
        console.log('err :', err);        
        console.log('result :', result[0].id);
        //  console.log('fields :', fields);
    })
    console.log("Connected!");
});