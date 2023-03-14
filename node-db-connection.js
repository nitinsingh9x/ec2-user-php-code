var mysql = require('mysql');

var con = mysql.createConnection({
  host: "database-1.cwur3pr9ccho.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "awsj069302619",
  database: 'testdb'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var sql = `
select * from users
`
con.query(sql, function(error, results, fields) {
  if (error) throw error;
  console.log(results);
});
