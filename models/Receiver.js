const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please add a valid email']
    },
    phone: {
        type: String,
        required: [true],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please Add a Password'],
        minlength: 6,
        select: false
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: [true, 'Please Enter your Gender']
    },
    address: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        required: true
    },
    role: {
        type: String,
        default: 'Receiver'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
    //check if the password is  modified
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(7);
    this.password = await bcrypt.hash(this.password, salt);
});

//Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign(
        {
            id: this._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE
        }
    );
};

//Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    const res = await bcrypt.compare(enteredPassword, this.password);
    return res;
};

module.exports = mongoose.model('User', UserSchema);
