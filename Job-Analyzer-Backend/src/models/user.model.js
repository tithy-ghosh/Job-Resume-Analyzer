const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: [true, "Username already taken"]
    },

    email:{
        type: String,
        unique: [true, "User already exist with this email"],
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;