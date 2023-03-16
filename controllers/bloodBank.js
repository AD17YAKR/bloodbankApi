const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const BloodBank = require('../models/BloodDetails');

//@desc     Get bloodBank data
//@routes   Get /api/v1/bloodBank/all
//@access   Public
exports.getBloodBankData = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advanceResults);
});

//@desc     Get bloodBank data by Hospital
//@routes   Get /api/v1/bloodBank/
//@access   Private
exports.getBloodBankDataByHospital = asyncHandler(async (req, res, next) => {
    const { id } = req.user;

    let bloodBank = await BloodBank.find({ hospital: id });

    res.status(201).json({
        success: true,
        data: bloodBank
    });
});

//@desc     Create new bloodBank Data
//@routes   POST /api/v1/bloodBank/
//@access   Private
exports.createBloodBankData = asyncHandler(async (req, res, next) => {
    const id = req.user.id;
    console.log(id);
    req.body.hospital = id;
    const bloodBank = await BloodBank.create(req.body);

    res.status(201).json({
        success: true,
        data: bloodBank
    });
});

//@desc     Update bloodBank Data
//@routes   Put /api/v1/bloodBank/:id
//@access   Private
exports.updateBloodBankData = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const userId = req.user.id;

    let bloodBank = await BloodBank.findById(id);

    if (!bloodBank)
        return next(new ErrorResponse('Blood Details Not exist', 401));
        
    let { hospital } = bloodBank;

    hospital = hospital.toString();

    if (hospital !== userId)
        return next(new ErrorResponse('Unauthorized access', 401));

    bloodBank = await BloodBank.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: bloodBank
    });
});

//@desc     Delete bloodBank Data
//@routes   DELETE /api/v1/bloodBank/:id
//@access   Private
exports.deleteBloodBankData = asyncHandler(async (req, res, next) => {
    const { id } = req.params;

    const userId = req.user.id;

    let bloodBank = await BloodBank.findById(id);

    if (!bloodBank)
        return next(new ErrorResponse('Blood Details Not exist', 401));

    let { hospital } = bloodBank;

    hospital = hospital.toString();

    if (hospital !== userId)
        return next(new ErrorResponse('Unauthorized access', 401));

    await BloodBank.findByIdAndDelete(id);

    res.status(200).json({
        success: true,
        data: {}
    });
});
