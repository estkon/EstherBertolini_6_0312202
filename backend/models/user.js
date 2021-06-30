const mongoose = require('mongoose');
const UniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

userSchema.plugin(UniqueValidator);
module.exports = mongoose.model('user', userSchema);