// bước 1: include thư viện http
// const express = require('express');
import express from 'express';
import homeroute from 'routes/home'
import productroute from 'routes/product'
import detalproductroute from 'routes/detalproduct'
const app = express();


app.use(express.json);
app.use(homeroute);
app.use(productroute);
app.use(detalproductroute);

//bước 2: khởi tạo server
// const server =http.createServer((request,response) => {
//  if(request.url === '/'){
//     // console.log("home page");
//     response.setHeader("Content-Type","text/html");
//     response.write("<h1>home page </h1>");
//     response.end();

//  }
//  if(request.url === '/products'){
//     // console.log("product page");
//     response.setHeader("Content-Type","text/html");
//     response.write("<h1>product page </h1>");
//     response.end();
//  }
//  if(request.url === '/new'){
//     // console.log("new page");
//     response.setHeader("Content-Type","text/html");
//     response.write("<h1>new page </h1>");
//     response.end();
//  }
// });






//bước 3: lắng nghe cổng thực thi
const port = 3001;
app.listen(port, () => {
    console.log(` server is running on ${port} `);
});
