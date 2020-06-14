const express = require('express');
const router = express.Router();
const Login = require('../models/Login');

router.post('/', async (req,res)=>{
    res.json("YES");
});


module.exports=router;