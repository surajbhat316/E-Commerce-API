const express = require('express');

const router = express.Router();





router.get('/', function(req,res){
    return res.status(200).json({
        message: "Message from /api/v1"
    });
});

module.exports = router;