const express = require('express');
const path = require('path');
const router = express.Router({
    'caseSensitive': false,
    'strict': false
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'product_page.html'))
});

module.exports = router;