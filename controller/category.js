const db = require('../dbconnection')



//show all category
function getAllCatagory(req,res) {
    const sql = "SELECT * from category";  
    db.query(sql, (err, rows) => { 
        console.log(rows); 
        if (err) throw err; 
        res.render('category', { 
            title: 'E-com Relation', 
            rows: rows 
        }); 
    }) 
}

//add category page
function getAddCategory(req,res){
    res.render('addCategory', { 
        title: 'Add Category', 

    }); 
}

// add category 
function addCategory(req,res){
    let category_name = req.body.name_c; 

    let query = "INSERT INTO `category` (name_c) VALUES ('" + category_name + "')"; 
    db.query(query, (err, result) => { 
        if (err) { 
            return res.status(500).send(err); 
        } 
    }); 
    res.render('addCategory'); 
}

// edit category Page

function getEditCategory(req,res){
    
    let idCategory = req.params.idCategory; 
    let sql = `Select * from category where idc = ${idCategory}`; 
    let query = db.query(sql, (err, result) => { 
        if (err) throw err; 
        res.render('editCategory', { 
            idc: idCategory, 
            row: result[0] 
        }); 
    }); 
}

//edit category Page 

function editCategory(req,res){
    
    let idCategory = req.params.idCategory; 
    let name = req.body.name_c; 


     let query = "UPDATE `category` SET `name_c` = '" + name + "' WHERE `category`.`idc` = '" + idCategory + "'";
    db.query(query, (err, result) => { 
        if (err) { 
            return res.status(500).send(err); 
        } 
        res.redirect('/category'); 
    }); 
}

//delete Category

function deleteCategory(req,res){
    let idCategory = req.params.idCategory; 
 
    let query = 'DELETE FROM category WHERE idc = "' + idCategory + '"'; 

    db.query(query, (err, result) => { 
        if (err) {  
            return res.status(500).send(err);  
        } 
        res.redirect('/category'); 
    }); 

}


module.exports ={
     getAllCatagory,
     getAddCategory,
     addCategory,
     getEditCategory,
     editCategory,
     deleteCategory,
}