const mongoose = require("mongoose")
const Joi = require('joi');
const { join } = require("path");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "Basic",
        required: true,
      },
    verified: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model("user", UserSchema)
function validate(user) {
    const Schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email.required()
    })
    return Schema.validate(user)
}
module.exports = { User, validate };