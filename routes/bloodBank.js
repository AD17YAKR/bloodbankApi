const express = require('express');
const {
    getBloodBankData,
    getBloodBankDataByHospital,
    createBloodBankData,
    deleteBloodBankData,
    updateBloodBankData
} = require('../controllers/bloodBank');
const BloodDetails = require('../models/BloodDetails');
const router = express.Router();
const advanceResults = require('../middlewares/advanceResults');
const { protect, authorize } = require('../middlewares/auth');

router.get(
    '/all',
    advanceResults(BloodDetails, {
        path: 'hospital',
        select: 'name phone address email'
    }),
    getBloodBankData
);

router
    .route('/')
    .get(protect, authorize('hospital'), getBloodBankDataByHospital)
    .post(protect, authorize('hospital'), createBloodBankData);

router
    .route('/:id')
    .put(protect, authorize('hospital'), updateBloodBankData)
    .delete(protect, authorize('hospital'), deleteBloodBankData);

module.exports = router;
