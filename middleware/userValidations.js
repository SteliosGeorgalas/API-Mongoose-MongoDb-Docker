const mongoose = require('mongoose');

async function validateUser(next) {
    const user = this;
    if (user.isModified('email')) {
        const existingUser = await mongoose.models.User.findOne({ email: user.email });
        if (existingUser) {
            const error = new Error('User with specified email already exists');
            next(error);
        }
    }
    if (user.isModified('age')) {
        if (user.age < 18) {
            const error = new Error('Under Age Users must use the api cautiously');
            next(error);
        }
    }
    next();
}


async function validateUserOnUpdate(next) {
    const user = this._update;
    if (user.email) {
        const existingUser = await mongoose.models.User.findOne({ email: user.email });
        if (existingUser) {
            const error = new Error('User with specified email already exists');
            next(error);
        }
    }
    if (user.age) {
        if (user.age < 18) {
            const error = new Error('Under Age Users must use the api cautiously');
            next(error);
        }
    }
    next();
}

module.exports = {
    validateUser, validateUserOnUpdate
};