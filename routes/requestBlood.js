const express = require('express');
const BloodDetails = require('../models/BloodDetails');
const router = express.Router();
const advanceResults = require('../middlewares/advanceResults');
const { protect, authorize } = require('../middlewares/auth');
const {
    addRequestForBlood,
    getAllRequestDetails
} = require('../controllers/requestBlood');

router
    .route('/')
    .post(protect, authorize('Receiver'), addRequestForBlood)
    .get(protect, authorize('hospital'), getAllRequestDetails);

module.exports = router;
