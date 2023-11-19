const mysql=require('mysql2');
const pool=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'VueData@2023',
    database:'samplesql',
    connectionLimit:10
});

pool.query('SELECT * FROM users',(err,results)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Query results:',results);

});

