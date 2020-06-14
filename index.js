const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','pug')
app.set('views','./views')


app.get('/',(req,res)=>{
    res.render('index',{
    })
})

app.post('/',(req,res)=>{
    res.render('main',{
    })
})

app.post('/addtime',(req,res)=>{
    res.render('success',{ 
    })
})

app.listen(3000);