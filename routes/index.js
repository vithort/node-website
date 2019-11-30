var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { page: 'Home', menuId: 'home', message: null });
});

/*router.get('/about', function (req, res, next) {
    res.render('about', { page: 'About Us', menuId: 'about' });
});

router.get('/contact', function (req, res, next) {
    res.render('contact', { page: 'Contact Us', menuId: 'contact' });
});
*/

router.post('/', function (req, res, next) {
    console.log(req.body.login)
    console.log(req.body.password)
    if ((req.body.login === 'email@teste.com') && (req.body.password === '123456')) {
        console.log('login ok')
        res.render('about', { page: 'About', menuId: 'about', message: null });
    } else {
        console.log('login falhou')
        res.render('index', { page: 'Home', menuId: 'index', message: 'Usuário e/ou senha inválidos!' });
    }
});


//res.render('login', { message: 'Usuário e/ou senha incorretos!' });


module.exports = router;