// bước 1: include thư viện http
const http = require('http');

const express = require('express');
const app = express();
const server = http.createServer(app);

const homeroute = require('./routes/home');
app.use(homeroute);
const productroute = require('./routes/product');
app.use(productroute);
const detalproductroute = require('./routes/detalproduct');
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
server.listen(port, () => {
    console.log(` server is running on ${port} `);
});
