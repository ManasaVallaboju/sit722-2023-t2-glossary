var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sit722- - Software Deployment And Operation', subheading: 'Below is the table containing collection of DevOps terms and their descriptions with references' });
});

module.exports = router;
