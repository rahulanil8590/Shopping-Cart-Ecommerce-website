var express = require('express');
var router = express.Router();
const UsersController = require('../controller/users_Controller')

/* GET home page. */
router.get('/', UsersController.HomePage);
 

module.exports = router;
