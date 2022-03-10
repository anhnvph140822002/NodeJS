const express = require('express');
const route = express.Router();


route.get('/', (request,response) =>{
    response.send(`
       <h1>home page </h1>
    `);
 });


 module.exports = route;