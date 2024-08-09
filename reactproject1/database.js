import mysql from 'mysql2';
import 'dotenv';

async function pull_data() {
    const pool=mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'Phinz22!',
        database:'company'

    }).promise()  //promise api 


    const [result] =  await pool.query("SELECT * FROM products") //first value of the json file, the relevent data is pulled
    return result
}


const result = await pull_data()




