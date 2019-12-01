const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login', { page: 'Login', menuId: 'login', message: null });
});

router.get('/index', function (req, res, next) {
    res.render('index', { page: 'Home', menuId: 'index' });
});

router.get('/about', function (req, res, next) {
    res.render('about', { page: 'About Us', menuId: 'about' });
});

router.get('/contact', function (req, res, next) {
    res.render('contact', { page: 'Contact Us', menuId: 'contact' });
});

router.post('/', function (req, res, next) {
    //console.log(req.body.usernameField)
    //console.log(req.body.passwordField)
    if ((req.body.usernameField === 'email@teste.com') && (req.body.passwordField === '123456')) {
        console.log('login ok')
        res.render('index', { page: 'Home', menuId: 'index', message: null });
    } else {
        console.log('login falhou')
        res.render('login', { page: 'Login', menuId: 'login', message: 'Usuário e/ou senha inválidos!' });
    }
});

module.exports = router;