const express = require('express');
const router = express.Router();


router.get('/1',(req,res)=>{
    res.send('welcom file send');
})

module.exports = router;