
const mongoose = require('mongoose');

const detailSchema = mongoose.Schema({
    acno: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    money: {
        type: Number,
        required:true
    }
});

module.exports = mongoose.model('Details', detailSchema);