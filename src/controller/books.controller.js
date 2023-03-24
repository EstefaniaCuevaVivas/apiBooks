const connection = require("../dataBase");

function getAll(request,response){
  let sql= "SELECT * FROM book"
  connection.query(sql,(err,resp)=>{

    if(err){
      console.log(err);
      respuesta ={error:true, codigo:200, mensaje:'libros libros', data:resp}
    }else{
      console.log(resp);
      respuesta = {error:true, codigo:200, mensaje:'todos los libros', data:resp}
    }

    response.send(respuesta)

  })
}

function getBook(request,response){

  let id_user = request.query.id_user;
  let id_book = request.query.id_book;
  let params;
  let sql;
  console.log(request.query);

  if (!id_book)
  {
    params= [id_user]
    sql = `SELECT * FROM book WHERE id_user = ?` ;
  }
  else
  {
    params= [id_user,id_book];
    sql = `SELECT * FROM book WHERE id_user = ? AND  id_book =?` ;
  }
 
  
  connection.query(sql,params,(err,res)=>{
    if(err){
      console.log(err);
      respuesta = {error:true, codigo:200, mensaje:'usuario no tiene libros', data:res}
    } else {
      if(res.length > 0){
        respuesta = {error:false, codigo:200, mensaje:'libros encontrados', data:res}
      } else {
        console.log('Los datos proporcionados no coinciden con ningún usuario en la base de datos.')
        respuesta = {error:true, codigo:200, mensaje:'No encontrado', data:res}
      }
      console.log(respuesta);
    }
    response.send(respuesta)
  })
} 


function postBook(request, response)
 {

  let params = [request.body.title,
                request.body.type,
                request.body.author,
                request.body.price,
                request.body.photo_libro,
                request.body.id_user]

  let sql=`INSERT INTO book (title,type,author,price,photo_libro,id_user)
          VAlUES (?,?,?,?,?,?)`              
  
 console.log(sql);
  connection.query(sql,params,(err,res)=>{
    if(err){
      console.log(err);
      respuesta = {error:true, codigo:200, mensaje:'libro no añadido', data:res}
    } else {
      if(res.length > 0){
        respuesta = {error:false, codigo:200, mensaje:'libro añadido', data:res}
      } else {
        console.log('Los datos proporcionados han sido añadidos.')
        respuesta = {error:false, codigo:200, mensaje:'libro añadido', data:res}
      }
      console.log(respuesta);
    }
    response.send(respuesta)
  })
}

function putBook(request, response)
{

 let params=[request.body.title,request.body.type,request.body.author,request.body.price,request.body.photo_libro,request.body.id_book] 
    let sql = `UPDATE book SET title = ?,type =?,author=?,price =?,photo_libro =? WHERE id_book = ?`
    connection.query(sql,params,(err,resp)=>
    {
    if(err){
      console.log(err);
      respuesta = {error:true, codigo:200, mensaje:'libro no actualizado', data:resp}
    } else {
      if(resp.length > 0){
        respuesta = {error:false, codigo:200, mensaje:'libro actualizado', data:resp}
      } else {
        console.log('Los datos proporcionados han sido actualizados.')
        respuesta = {error:false, codigo:200, mensaje:'libro actualizado', data:resp}
      }
      console.log(respuesta);
    }
    response.send(respuesta)
  })
};

function deleteBook(request, response)
{
  let params=[request.body.id_book];
  let sql = `DELETE FROM book WHERE id_book = ?`;
  connection.query(sql,params,(err,resp)=>
    {
    if(err){
      console.log(err);
      respuesta = {error:true, codigo:200, mensaje:'libro no eliminado', data:resp}
    } else {
      if(resp.length > 0){
        respuesta = {error:false, codigo:200, mensaje:'libro eliminado', data:resp}
      } else {
        console.log('el libro proporcionado ha sido eliminado.')
        respuesta = {error:true, codigo:200, mensaje:'libro eliminado', data:resp}
      }
      console.log(respuesta);
    }
    response.send(respuesta)
  })

};

module.exports = {getBook, postBook,putBook,deleteBook,getAll};