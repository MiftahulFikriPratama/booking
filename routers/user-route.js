// const userController = require('../controllers/user');
const userController = require('../controllers/User.js')
const express = require('express');

const router = express.Router();


//END POINT
router.get('/users', userController.user);
// router.post('/users', userController.user);
router.post('/users', userController.insert);
router.delete('/user/delete/:id', userController.destroy);


module.exports = router;
