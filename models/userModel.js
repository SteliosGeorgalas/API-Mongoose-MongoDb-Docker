const mongoose = require('mongoose');
const { validateUser, validateUserOnUpdate } = require('../middleware/userValidations');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase:true },
    age: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    photo: {
        type: String,
        default: 'default.jpg'
    }
});

userSchema.pre('save', validateUser);
userSchema.pre('findOneAndUpdate', validateUserOnUpdate);

const User = mongoose.model('User', userSchema);

module.exports = User;