const express = require('express');
const {
    getBloodBankData,
    createBloodBankData,
    deleteBloodBankData,
    updateBloodBankData
} = require('../controllers/bloodBank');
const BloodDetails = require('../models/BloodDetails');
const router = express.Router();
const advanceResults = require('../middlewares/advanceResults');
const { protect } = require('../middlewares/auth');

router
    .route('/')
    .get(advanceResults(BloodDetails), getBloodBankData)
    .post(protect, createBloodBankData);

router
    .route('/:id')
    .put(protect, updateBloodBankData)
    .delete(protect, deleteBloodBankData);

module.exports = router;
