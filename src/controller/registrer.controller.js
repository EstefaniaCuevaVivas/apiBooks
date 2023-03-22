
const connection = require("../dataBase");




function getUser(request, response) {
  let sql;
  if (request.query.id_user == null) 
  sql = "SELECT * FROM user";
  else sql = "SELECT nombre_user,surname_user,email,photo_user,password_user FROM user WHERE id_user = " + request.query.id_user;

  connection.query(sql, function (err, result) {
    if (err) 
    console.log(err);
    else {
      response.send(result);
    }
  });
}

function postUser(request,response)
{
  console.log(request.body);


  let sql = "INSERT INTO user (name,last_name,email,photo,password)" + 
  "VAlUES ('" + request.body.name + "','"+ 
                request.body.last_name + "', '" + 
                request.body.email + "','" + 
                request.body.photo + "', '" + 
                request.body.password + "')"
  console.log(sql);
  connection.query(sql,function(err,result)
  {
    if(err)
    console.log(err);

    else
    {
      console.log(result);
      if(result)
      response.send(String(result.insertId));
      else
      response.send("-1")
    }
  })             
}

module.exports={getUser,postUser};