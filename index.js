



var express = require('express');
var Router = require('./routes/router');
var jwt = require('express-jwt');
var authMiddleware=require('./middlewares/auth');


var app = express();



//appload router
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(Router);



app.use(express.static('public')) //acceder au dossier public
// app.use(cors());


app.listen(8000, function(){
	console.log("App listen in port 8000");
});