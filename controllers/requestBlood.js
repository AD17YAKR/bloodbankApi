const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const RequestDetail = require('../models/RequestDetail');

//@desc     Request for Receiving blood
//@routes   POST /api/v1/request/
//@access   Private/user
exports.addRequestForBlood = asyncHandler(async (req, res, next) => {
    const id = req.user.id;

    console.log(id);

    req.body.receiver = id;

    const bloodBank = await RequestDetail.create(req.body);

    res.status(201).json({
        success: true,
        data: bloodBank
    });
});

//@desc     Get Receivers details
//@routes   Get /api/v1/receiver/
//@access   Private/hospital
exports.getAllRequestDetails = asyncHandler(async (req, res, next) => {
    const { id } = req.user;

    let receiverDetails = await RequestDetail.find({ hospital: id }).populate({
        path: 'receiver',
        select: 'name phone address email gender'
    });

    res.status(201).json({
        success: true,
        data: receiverDetails
    });
});
