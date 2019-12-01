const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.render('login', { page: 'Login', menuId: 'login', message: null });
});

router.get('/index', function (req, res, next) {
    res.render('index', { page: 'Home', menuId: 'index', message: null, usuario: usuario });
});

router.get('/about', function (req, res, next) {
    res.render('about', { page: 'About Us', menuId: 'about', message: null });
});

router.get('/contact', function (req, res, next) {
    res.render('contact', { page: 'Contact Us', menuId: 'contact', message: null });
});

router.post('/', function (req, res, next) {
    //console.log(req.body.usernameField)
    //console.log(req.body.passwordField)
    if ((req.body.usernameField === 'email@teste.com') && (req.body.passwordField === '123456')) {
        let usuario = [
            {
                "pessoa": 123,
                "nome": "Miguel",
                "sobrenome": "Barreto",
                "email": "miguel@email.com",
                "senha": "123456",
                "mae": "Maria",
                "matricula": "000123",
                "curso": "Medicina",
                "uf": "FTC-PARALELA"
            },
            {
                "pessoa": 456,
                "nome": "Vithor",
                "sobrenome": "Carvalho",
                "email": "vithor@email.com",
                "senha": "123456",
                "mae": "Jussara",
                "matricula": "000456",
                "curso": "Informática",
                "uf": "FTC-LAPA"
            }
        ]
        //console.log('login ok');
        res.render('index', { page: 'Home', menuId: 'index', message: null, usuario: usuario });
    } else {
        //console.log('login falhou');
        res.render('login', { page: 'Login', menuId: 'login', message: 'Usuário e/ou senha inválidos!' });
    }
});

module.exports = router;