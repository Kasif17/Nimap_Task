const express = require('express') 
const bodyParser = require('body-parser'); 
const mysql = require('mysql'); 
const path = require('path'); 
const  ejs = require('ejs'); 

const app = express() 
const port = 3000 

const db = require("./dbconnection"); 

const categoryRoutes = require("./routes/category"); 
const productRoutes = require("./routes/product"); 


app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
const publicDirectory = path.join(__dirname, './public'); 
app.use(express.static(path.join(__dirname, 'public', 'dashboard','css'))); 
app.use(express.static(path.join(__dirname, 'public', 'dashboard','img'))); 
app.use(express.static(path.join(__dirname, 'public', 'dashboard','lib'))); 
app.use(express.static(publicDirectory)); 


app.use("/category",categoryRoutes); 
app.use("/product",productRoutes);  

app.get('/', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
      const sql = "SELECT * FROM product INNER JOIN category ON product.category = category.idc LIMIT ?, ?";
      db.query(sql, [offset, limit], (err, rows) => {
          if (err) throw err;
          res.render('index', {
              title: 'E-com Relation',
              rows: rows,
              page: page
          });
      });
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});






app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`) 
}) 