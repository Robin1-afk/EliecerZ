const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'sqlXXX.epizy.com',
    user     : 'epiz_30955757',
    password : 'elJlXzKkib4n',
    database : 'epiz_30955757_politica'
  });

connection.connect((err)=>{
    if(err) throw err;
    console.log('database connect')
    });

    module.exports = connection;

    