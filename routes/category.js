

const express = require('express');
const {listCategory, listCategoryDetail, createCategory, deleteCategory, updateCategory } = require('../controllers/category');
const routers = express.Router();listCategory



routers.get('/category', listCategory);

routers.get('/category/:id', listCategoryDetail);

routers.post('/category', createCategory);

routers.delete('/category/:id', deleteCategory);

routers.put('/category/:id', updateCategory);

export default routers;