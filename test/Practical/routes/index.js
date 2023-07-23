var express = require('express');
var router = express.Router();

var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    let glossary = JSON.parse(data);
    res.render('index', { title: 'SIT722 DevOps Glossary', subheading: 'Below is the table containing cllection of DevOps terms and their descriptions with references' });
  });
});

module.exports = router;
