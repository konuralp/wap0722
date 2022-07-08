const express = require('express');
const path = require('path');
const router = express.Router({
    'caseSensitive': false,
    'strict': false
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'product_page.html'))
});

router.post('/order', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.price);
    res.send(`Order of total ${req.body.price} succesfully added. <a href="..">Click here to go back</a>`);
});

module.exports = router;