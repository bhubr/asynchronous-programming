const mysql      = require('mysql');
const { promisify } = require('util');

const connection = mysql.createConnection({
  host     : 'localhost',
  database : 'sqlquests',
  user     : 'sqlquests',
  password : 'sqlquests'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

connection.queryAsync = promisify(connection.query.bind(connection));

module.exports = connection;
