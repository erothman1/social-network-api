const { User, Thought } = require("../models")
const { Types } = require("mongoose")

module.exports = {
    //get all users
    async getUsers(req, res) {
        try {
            const response = await User.find({})
            res.status(200).json(response)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },
    //get single user by its userId
    async getSingleUser(req, res) {
        try {
            const response = await User.findOne({ _id: req.body.userId })
                .select("-__v")
                .populate("thoughts", "friends")

            !response ? res.status(404).json({ message: 'No user with that ID' }) : res.json(response)

        } catch (err) {
            res.status(500).json({ message: err })
        }
    },
    //create a new user 
    async createUser(req, res) {
        try {
            const response = await User.create(req.body)
            res.json(response)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },
    //update a user
    async updateUser(req, res) {
        try {
            const response = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            )

            !response ? res.status(404).json({ message: "No user with that ID" }) : res.json(response)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },
    //delete a user and their associated thoughts
    async deleteUser(req, res) {
        try {
            const userData = await User.findOneAndRemove({ _id: req.body.userId })

            if (!userData) {
                return res.status(404).json({ message: "No user with that ID" }) 
            }

            const thoughtData = await Thought.deleteMany(
                { username: req.params.userId }
            )

            !thoughtData 
            ? res.status(404).json({ message: "User deleted but no thoughts found" }) 
            : res.json("User successfully deleted")

        } catch (err) {
            res.status(500).json({ message: err })
        }
    },
    //add new friend to user's friend list
    async newFriend(req, res) {
        try {
            const friendId = Types.ObjectId(req.params.friendId)
            const response = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: friendId } },
                { runValidators: true, new: true }
            )
                console.log(response, friendId)
            !response ? res.status(404).json({ message: "No user with that ID" }) : res.json(response)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    },
    //remove friend from user's friend list
    async deleteFriend(req, res) {
        try {
            const friendId = Types.ObjectId(req.params.friendId)
            const response = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: friendId } },
                { runValidators: true, new: true }
            )

            !response ? res.status(404).json({ message: "No user with that ID" }) : res.json(response)
        } catch (err) {
            res.status(500).json({ message: err })
        }
    }
}
