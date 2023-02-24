/* 
    users.js
    Name: Carla Barazarte 
    StudentID: 301295205
    Date: 02/23/2023 
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
