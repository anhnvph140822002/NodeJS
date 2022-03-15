import express from "express";
const router = express.Router();
const products = [
   {id:1 , name:"product 1"},
   {id:2 , name:"product 2"}
]

router.get('/products', (request,response)=>{
    response.json(products)
 })
 router.get('/products/:id', (request,response)=>{
    const product = products.find(item =>  item.id === +request.params.id)
    response.json(product)
})
router.post('/product',(request,response) =>{
   products.push(request.body)
   response.json(products)
})


export default router