const mongoose = require('mongoose');

const BloodBankSchema = new mongoose.Schema({
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        required: true
    },
    units: {
        type: Number,
        required: true,
        min: 1
    },
    hospital: {
        type: mongoose.Schema.ObjectId,
        ref: 'Hospital',
        required: true
    }
});

module.exports = mongoose.model('BloodBank', BloodBankSchema);
