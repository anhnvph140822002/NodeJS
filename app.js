// bước 1: include thư viện http
import express from 'express';
import homeroute from './routes/home';
import productroute from './routes/product';
import cors from 'cors'
import mongoose from 'mongoose';
// import morgan from 'morgan';
import categoryroute from './routes/category';
import authRoute from './routes/auth';

const app = express();
//middleware
// app.use(cors())
// app.use(morgan('tiny'))
// app.use(express.json())

app.use(express.json())
app.use(homeroute);
app.use("/api",productroute);
app.use("/api",categoryroute);
app.use("/api", authRoute);

mongoose.connect('mongodb://localhost:27017/nodejsvanh');

//bước 3: lắng nghe cổng thực thi
const port = 3001;
app.listen(port, () => {
    console.log(` server is running on ${port} `);
});
