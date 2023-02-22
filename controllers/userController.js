const User = require('../models/userModel');

const userController = {};

userController.getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-__v');
        res.status(200).send({ success: true, data: users });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
};

userController.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send({ success: true, data: user });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
};

userController.getUserByEmail = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        res.status(200).send({ success: true, data: user.name });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
};

userController.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ success: true, data: user });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
};

userController.updateUser = async (req, res) => {
    try {
        if (req.file){
            const photo = req.file.filename;
            req.body.photo = photo
        }
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).send({ success: true, message: "User Succesfully Updated" , data: user});
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
};

userController.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(202).send({ success: true, data: user, message: "User Successfully deleted" });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: false, error: error.message });
    }
};


module.exports = userController;