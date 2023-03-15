const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const User = require('../models/Receiver');
const Hospital = require('../models/Hospital');

//@desc     Register New Hospital
//@routes   POST /api/v1/auth/register/hospital
//@access   Public
exports.registerHospital = asyncHandler(async (req, res, next) => {
    const { name, email, password, phone, address } = req.body;

    //Create New Hospital
    const user = await Hospital.create({
        name,
        email,
        phone,
        password,
        address
    });

    //JWT Token Creation
    sendTokenResponse(user, 200, res);
});

//@desc     Register New Hospital
//@routes   POST /api/v1/auth/register/user
//@access   Public
exports.registerUser = asyncHandler(async (req, res, next) => {
    const { name, email, password, phone, address, gender, bloodGroup } =
        req.body;

    //Create New User
    const user = await User.create({
        name,
        email,
        phone,
        password,
        gender,
        address,
        bloodGroup
    });

    //JWT Token Creation
    sendTokenResponse(user, 200, res);
});

//@desc     Login User
//@routes   POST /api/v1/auth/login/hospital
//@access   Public
exports.loginHospital = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    //Validate Email and Password
    if (!email || !password) {
        return next(
            new ErrorResponse('Please provide and email and a password', 400)
        );
    }

    //Check for user
    const hospital = await Hospital.findOne({ email }).select('+password');

    if (!hospital) {
        return next(new ErrorResponse('Invalid Credentials', 401));
    }

    //Check if password matches
    const isMatch = await hospital.matchPassword(password);

    if (!isMatch) {
        return next(new ErrorResponse('Invalid Credentials', 401));
    }

    //JWT Token Creation
    sendTokenResponse(hospital, 200, res);
});

//@desc     Login User
//@routes   POST /api/v1/auth/login
//@access   Public
exports.loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    //Validate Email and Password
    if (!email || !password) {
        return next(
            new ErrorResponse('Please provide and email and a password', 400)
        );
    }

    //Check for user
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorResponse('Invalid Credentials', 401));
    }

    //Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return next(new ErrorResponse('Invalid Credentials', 401));
    }

    //JWT Token Creation
    sendTokenResponse(user, 200, res);
});

//@desc     Log Out User
//@routes   GET /api/v1/auth/logout
//@access   Private
exports.logout = asyncHandler(async (req, res, next) => {
    res.cookie('token', 'none', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    });

    res.status(200).json({
        success: true,
        data: {}
    });
});

//@desc     Get Current Logged in user Details
//@routes   POST /api/v1/auth/me
//@access   Private
exports.getMe = asyncHandler(async (req, res, next) => {
    console.log(req.user);
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        data: user
    });
});

//@desc     Forgot Password
//@routes   POST /api/v1/auth/forgotPassword/
//@access   Public
exports.forgotPassword = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({
        email: req.body.email
    });

    if (!user) {
        return next(new ErrorResponse('No user with this email found', 404));
    }

    //Get Reset Token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    //Create reset URL
    const resetUrl = `${req.protocol}://${req.get(
        'host'
    )}/api/v1/resetpassword/${resetToken}`;

    const message = `You are receiving this email because you requested to reset you password. \n Please make a PUT request to: \n\n ${resetUrl}`;

    const options = {
        email: user.email,
        subject: 'Password Reset Token',
        message: message
    };

    try {
        await sendEmail({
            email: user.email,
            subject: 'Password Reset Token',
            text: message
        });

        res.status(200).json({
            success: true,
            data: 'Email Sent',
            message
        });
    } catch (error) {
        console.log(error);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorResponse('Email could not be sent', 500));
    }

    res.status(200).json({
        success: true,
        data: user
    });
});

//@desc     Reset Password
//@routes   PUT /api/v1/auth/resetPassword/:resetToken
//@access   Public
exports.resetPassword = asyncHandler(async (req, res, next) => {
    //Get hashed token
    let resetPasswordToken = crypto
        .createHash('sha256')
        .update(req.params.resettoken)
        .digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    });

    if (!user) {
        return next(new ErrorResponse('Invalid  token', 400));
    }

    //Set new password
    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    sendTokenResponse(user, 200, res);
});

//@desc     Update User details
//@routes   PUT /api/v1/auth/updatedDetails
//@access   Private
exports.updateDetails = asyncHandler(async (req, res, next) => {
    const fieldsToUpdate = {
        name: req.body.name,
        email: req.body.email
    };

    console.log(req.user);

    const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: user
    });
});

//@desc     Update Password
//@routes   POST /api/v1/auth/updatePassword
//@access   Private
exports.updatePassword = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id).select('+password');

    //Check current Password
    if (!(await user.matchPassword(req.body.currentPassword))) {
        return next(new ErrorResponse('Password is incorrect', 401));
    }

    user.password = req.body.newPassword;
    await user.save();
    sendTokenResponse(user, 200, res);
});

//Helper Function to send token response
const sendTokenResponse = (user, statusCode, res) => {
    //JWT Token Creation
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token
    });
};
