const express= require('express');
const router = express.Router();

router.use('/add-product', (req, res, next) => {
    res.send('<html><body><form action ="/product" method="POST"><input type ="text" name="title"/><button type="submit">Add</button></form></body></html>');
    next();
  });
  
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
  });

module.exports=router;