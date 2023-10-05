const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, "Enter name"]
    },
    email: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: [true, "Enter password"]
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)