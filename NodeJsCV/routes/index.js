var express = require('express');
var router = express.Router();
var db = require('../model/')

/* GET home page. */
router.post('/', function (req, res, next) {
    db.query("INSERT INTO mensaje_de_usuario (usuario, mensaje) VALUES ($1, $2)", [req.body.user, req.body.message])
            .then(response => {
                res.json({message: 'Todo excelente', data: response.rows})
            })
            .catch(e => {
                console.log(e.stack)
            });
});

module.exports = router;
