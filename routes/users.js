var express = require('express');
var router = express.Router();
const validationMiddleware = require('../middlewares/validationMiddleware');
const userController = require('../controllers/user');

/* GET users listing. */
router.get('/', userController.getUsers);
/* POST insert user. */
router.post('/', validationMiddleware, userController.postUser);

module.exports = router;
