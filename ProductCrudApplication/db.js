require("dotenv").config();
let mysql=require("mysql2");
let conn=mysql.createConnection({
    host:process.env.db_host,
    user:process.env.db_user,
    password:process.env.db_password,
    database:process.env.db_name 
});
conn.connect((err)=>{
    if(err){
       
        console.log("Database Not connect..."+err);
    }else{
        console.log("Database Connected Successfully  With localhost:3005....!");  
    }
})

module.exports = conn;