import { response } from "express"
import { request } from "express"
import category from "../models/category"


export const listCategory = async (request, response) => {
    try{
        const product = await category.find().exec()
        response.json(product)
        }catch(error){
        response.status(400).json({message:"Loi"})
        }
    // response.json(products)
}
export const listCategoryDetail = (request, response) => {
    try {
        const product = category.findOne({_id:request.params.id}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"Lỗi data"})
    }
    // const product = products.find(item => item.id === +request.params.id)
    // response.json(product)
}
export const createCategory = async (request, response) => {
    try {
        const product = await category(request.body).save()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"k thể thêm sp"})
    }
    // products.push(request.body)
    // response.json(products)
}
export const deleteCategory = (request, response)=> {
    try {
        const product = category.findOneAndDelete({_id:request.params.id}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"k thể xóa sp"})
    }
    // const product = products.filter(item => item.id != +request.params.id)
    // response.json(product)
}
export const updateCategory = async (request, response)=> {
    try {
        const product = await category.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"k thể update sp"})
    }
    // response.json(products.map(item => item.id === +request.params.id ? request.body : item))
}