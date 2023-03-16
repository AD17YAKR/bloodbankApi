const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const RequestDetailsSchema = new mongoose.Schema({
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        required: true
    },
    receiver: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true
    },
    hospital: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hospital',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('RequestDetails', RequestDetailsSchema);
