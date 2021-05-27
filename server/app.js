require('dotenv').config()
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
app.use(express.json())
app.use(cookieParser())

require('./db/conn')
const User = require('./model/userSchema')
app.use(require('./router/auth'))

const port = process.env.PORT || 5000

app.get('/setcookie', function (req, res) {
      
    // Setting a cookie with key 'my_cookie' 
    // and value 'geeksforgeeks'
    res.cookie('my_cookie', 'geeksforgeeks');
    res.send('Cookies added');
  })
    
  // Route for getting all the cookies
  app.get('/getcookie', function (req, res) {
      res.send(req.cookies);
  })


app.listen(port , () => {
    console.log(`Backend is running at Port ${port}`)
})
// mongodb+srv://Ankit628792:<password>@cluster0.tde6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
 