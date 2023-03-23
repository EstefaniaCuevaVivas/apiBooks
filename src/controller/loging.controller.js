
const connection = require("../dataBase");

function getUser(request, response) {
  let sql;
  if (request.query.id_user == null) 
  sql = "SELECT * FROM user";
  else sql = "SELECT nombre_user,surname_user,email,photo_user,password FROM students WHERE id_user = " + request.query.id_user;

  connection.query(sql, function (err, result) {
    if (err) 
    console.log(err);
    else {
      response.send(result);
    }
  });
}

function postUserLoging(request, response) {
  let respuesta;
  console.log('BODY**************************************');
  console.log(request.body);
  
  let email = request.body.email;
  console.log(email);
  let password = request.body.password;
  console.log(password);
  
  let params =[email,password]
  console.log(params);

  let sql = `SELECT * FROM user WHERE email = ? AND password = ?`;
  
  connection.query(sql, params, (err,res)=>{
    if(err){
      console.log(err);
      respuesta = {error:true, codigo:200, mensaje:'NO logueado', data_user:res}
    } else {
      if(res.length > 0){
        respuesta = {error:false, codigo:200, mensaje:'logueado', data_user:res[0]}
      } else {
        console.log('Los datos proporcionados no coinciden con ningún usuario en la base de datos.')
        respuesta = {error:true, codigo:200, mensaje:'NO logeado', data_user:res}
      }
      console.log(respuesta);
    }
    response.send(respuesta)
  })
  
  }

  
  module.exports={getUser,postUserLoging}