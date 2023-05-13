const { response } = require("express")
const User = require("../models/User")

module.exports = {
    //get all users
    async getUsers(req, res) {
        try {
            response = await User.find({})
            res.status(200).json(response)
        } catch (err) {
            res.status(500).json({ message: err})
        }
    },
    //get single user by its userId
    async getSingleUser(req, res) {
        try {
            response = await User.findOne({ _id: req.params.userId }).select("-__v").populate("thought")
            !response ? res.status(404).json({ message: 'No user with that ID' }) : res.json(response)
        } catch (err) {
            res.status(500).json({ message: err})
        }
    },
    //create a new user 
    async createUser(req, res) {
        try{
            response = await User.create(req.body) 
            res.json(response)
        } catch (err) {
            res.status(500).json({ message: err})
        }
    }
}