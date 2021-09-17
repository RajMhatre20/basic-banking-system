var moment = require('moment-timezone');
const mongoose = require('mongoose');

const historySchema = mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    reciever: {
        type: String,
        required:true
    },
    amount: {
        type: Number,
        required:true
    },
    date:{
        type: String,
        default: moment().tz("Asia/Kolkata").format('MMMM Do YYYY, h:mm:ss a')
    }
});

module.exports = mongoose.model('history', historySchema);