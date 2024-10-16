const express = require('express');     
const Router = express.Router(); 
const { getAllCatagory, getAddCategory, addCategory, getEditCategory, editCategory, deleteCategory } = require('../controller/category')
// const db = require("../dbconnection"); 

Router.get('/',getAllCatagory); 

Router.get('/addCategory', getAddCategory); 

Router.post("/addCategory", addCategory); 

Router.get("/editCategory/:idCategory", getEditCategory); 

Router.post("/editCategory/:idCategory", editCategory); 

Router.get("/deleteCategory/:idCategory", deleteCategory); 
 
module.exports = Router; 