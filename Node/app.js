const express =require ('express');
const app=express();
const router = express.Router();
app.use((req,res,next)=>{
    console.log(`Welcome! The request method is ${req.method} and the url is ${req.url}`);
    next();
});

app.get('/',(req,res,next)=>{
    res.send(`
        <h1>Root page</h1>
        <button onclick="location.href='/Dhanush'">Main page</button>
    `);
});

app.get('/Dhanush',(req,res,next)=>{
    res.send(`<h1>Main page</h1><button onclick="location.href='/Dhanush/firstpage'">Sub page</button>`);
});

router.get('/firstpage',(req,res,next)=>{
    res.send('<h1>Sub page</h1><script>alert("Last tab!")</script>');
});

app.use('/Dhanush',router);
app.listen(2000);