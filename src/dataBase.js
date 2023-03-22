const mysql = require("mysql2");

const connection = mysql.createConnection(

  {
    host: "localhost",
    user: "root",
    password : "31388113",
    database: "appBooks"
  });

 connection.connect(function(error){
  if(error){
    console.log(error)
  }else{
    console.log("conexion correcta.");
  }
 }) 

 module.exports = connection;
