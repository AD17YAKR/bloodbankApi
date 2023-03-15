const express = require('express');
const {
    registerHospital,
    registerUser,
    loginHospital,
    loginUser
} = require('../controllers/auth');

const router = express.Router();

router.post('/register/hospital', registerHospital);
router.post('/register/user', registerUser);
router.post('/login/hospital', loginHospital);
router.post('/login/user', loginUser);

module.exports = router;
