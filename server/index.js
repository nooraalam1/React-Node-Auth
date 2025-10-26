const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();



app.use(cors());              
app.use(express.json());

app.listen(8081, () => {
  console.log("Server running on port 8081");
});

const db = mysql.createConnection({
  host: 'localhost',     
  user: 'root',          
  password: '',          
  database: 'react_node_auth'     
});


app.post('/register',(req,res)=>{
const {name,email,password} = req.body
const q = 'INSERT INTO users( name, email,password) VALUES (?,?,?)'
db.query(q, [name,email,password],(err,data)=>{
if(err) return res.json(err)
return res.json(data) 
})
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const q = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(q, [email, password], (err, data) => {
    if (err) return res.status(500).json({ error: err });

    if (data.length > 0) {
      return res.json({ success: true, message: 'Login successful!', user: data[0] });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid email or password!' });
    }
  });
});