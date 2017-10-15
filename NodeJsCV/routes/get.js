var express = require('express');
var router = express.Router();
var db = require('../model/')

/* GET home page. */
router.get('/', function (req, res, next) {
    db.query("SELECT usuario, mensaje FROM mensaje_de_usuario")
            .then(response => {
                res.json({rows: response.rows})
            })
            .catch(e => {
                console.log(e.stack)
            });
});

module.exports = router;
