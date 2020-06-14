const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
    slot:{
        type: Array,
        default: []
    }
});

module.exports = mongoose.model('Login',LoginSchema);