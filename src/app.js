const express = require("express");
const cors = require("cors");
const logingRouters = require("./routers/loging.routers");
const registrerRouters = require("./routers/registrer.routers");
const booksRouters = require("./routers/books.routers")
const userRouters =require("./routers/user.routers")
const errorHandling = require("./error/errorHandling");


const app = express();

app.set("port", process.env.PORT || 3000)

app.use (cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(logingRouters);
app.use(registrerRouters);
app.use(booksRouters);
app.use(userRouters);

app.use(function(req,res,next)
{
  res.status(404).json({ error:true,
                         codigo:404,
                         message:"Endpoint doesnt found"

  })
})

app.use(errorHandling);

module.exports = app;