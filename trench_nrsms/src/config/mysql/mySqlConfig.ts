import mysql from 'mysql2';

export const mySqlConnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'new_password',
  database : 'trench_nrsms'
});