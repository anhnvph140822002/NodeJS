import express from "express";
const router = express.Router();


router.get('/', (request,response) =>{
    response.send(`
       <h1>home page </h1>
    `);
 });


export default router