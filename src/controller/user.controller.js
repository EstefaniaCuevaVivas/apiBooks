const connection = require("../dataBase");

function putUser(request, response)
{

 let params=[request.body.id_user,request.body.name,request.body.last_name,request.body.email,request.body.photo,request.body.password] 
    let sql = `UPDATE user SET name = ?,last_name =?,email=?,photo =?,password =? WHERE id_user = ?`
    connection.query(sql,params,(err,resp)=>
    {
    if(err){
      console.log(err);
      respuesta = {error:true, codigo:200, mensaje:'usuario no actualizado', data_user:resp}
    } else {
      if(resp.length > 0){
        respuesta = {error:false, codigo:200, mensaje:'usuario actualizado', data_user:resp}
      } else {
        console.log('Los datos proporcionados han sido actualizados.')
        respuesta = {error:true, codigo:200, mensaje:'usuario actualizado', data_user:resp}
      }
      console.log(respuesta);
    }
    response.send(respuesta)
  })
};


module.exports={putUser}