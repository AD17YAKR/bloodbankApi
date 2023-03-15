const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    phone: {
        type: String,
        required: [true, "Please add Hospital's phone Number"]
    },
    email: {
        type: String,
        required: [true, 'Please add email'],
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please add a valid email']
    },
    address: {
        type: String,
        required: [true, 'Please add the address']
    },
    password: {
        type: String,
        required: [true, 'Please Add a Password'],
        minlength: 6,
        select: false
    },
    role: {
        type: String,
        default: 'hospital'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//Encrypt password using bcrypt
HospitalSchema.pre('save', async function (next) {
    //check if the password is  modified
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(7);
    this.password = await bcrypt.hash(this.password, salt);
});

//Sign JWT and return
HospitalSchema.methods.getSignedJwtToken = function () {
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
HospitalSchema.methods.matchPassword = async function (enteredPassword) {
    const res = await bcrypt.compare(enteredPassword, this.password);
    return res;
};

module.exports = mongoose.model('Hospital', HospitalSchema);
