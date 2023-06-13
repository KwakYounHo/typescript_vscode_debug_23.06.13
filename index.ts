import mysql, { RowDataPacket } from 'mysql2';

const DB = mysql.createConnection({
  host: '192.168.100.64',
  user: 'admin_dal',
  password: '1234',
  database: 'stocktaxi'
})

DB.connect(()=>{
  console.log('DB접속');
});

DB.query('select * from user_infor', (err: Error,result: RowDataPacket)=> {
  if (err) throw err;
  console.log(result);
})