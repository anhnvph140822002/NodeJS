import { response } from "express"
import { request } from "express"
import Products from "../models/products"

const products = [
    {id: 1, name: "Product 1"},
    {id: 2, name: "Product 2"},
    {id: 3, name: "Product 3"},
    {id: 4, name: "Product 4"},
    {id: 5, name: "Product 5"}

]

export const listProduct = async (request, response) => {
    try{
        const product = Products.find().exec()
        response.json(product)
        }catch(error){
        response.status(400).json({message:"Loi"})
        }
    // response.json(products)
}
export const listProductDetail = (request, response) => {
    const product = products.find(item => item.id === +request.params.id)
    response.json(product)
}
export const createProduct = (request, response) => {
    products.push(request.body)
    response.json(products)
}
export const deleteProduct = (request, response)=> {
    const product = products.filter(item => item.id != +request.params.id)
    response.json(product)
}
export const updateProduct = (request, response)=> {
    response.json(products.map(item => item.id === +request.params.id ? request.body : item))
}