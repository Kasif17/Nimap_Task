const mysql = require('mysql'); 

// database connection 
const db = mysql.createConnection ({ 
    host: 'localhost', 
    user: 'root', 
    password: 'Coding@786',
    database: 'product-category' 
  });
  
  // connect to database
  db.connect((err) => { 
    if (err) {  
        throw err; 
    } 
    console.log('Connected to database'); 
  }); 
  

  module.exports = db; 