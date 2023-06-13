import mysql from 'mysql2';

console.log('ㅋ');

const DB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'testIA'
});

DB.connect(()=>{
  console.log('DB시작');
});

DB.query('select * from user_information', (err,result)=>{
  if (err) throw err;
  console.log(result);
})