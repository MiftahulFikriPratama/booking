const express = require('express');

const userController = require('../controllers/User.js')


const router = express.Router();


//END POINT
router.get('/users', userController.user);
// router.post('/users', userController.user);
router.post('/users', userController.insert);
router.delete('/user/delete/:id', userController.deleteDate);


module.exports = router;
