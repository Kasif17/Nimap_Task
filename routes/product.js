const express = require('express'); 
const Router = express.Router(); 
const { addProduct, getEditProduct, editProduct, deleteProduct, getAddProduct } = require('../controller/product');
const { getAddCategory } = require('../controller/category');


Router.get('/addProduct', getAddProduct); 

Router.post("/addProduct", addProduct); 

Router.get("/editProduct/:idProduct", getEditProduct); 

Router.post("/editProduct/:idProduct", editProduct); 

Router.get("/deleteProduct/:idProduct", deleteProduct); 


module.exports = Router; 