const express = require('express');
const path = require('path');
const router = express.Router({
    'caseSensitive': false,
    'strict': false
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'users.html'))
});

router.post('/add', (req, res, next) => {
    console.log(req.body);
    console.log(req.body.name, req.body.email);
    res.send('User succesfully added. <a href="..">Click here to go back</a>');
});

module.exports = router;