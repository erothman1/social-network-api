const router = require("express").Router()
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    newFriend,
    deleteFriend
} = require("../../controllers/userController")

router.route("/")
    .get(getUsers)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser)

router.route("/:userId")
    .get(getSingleUser)

router.route("/:userId/friends/:friendId")
    .post(newFriend)
    .delete(deleteFriend)

module.exports = router