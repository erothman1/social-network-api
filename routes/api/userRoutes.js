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
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)

//TODO: these routes aren't working
router.route("/:userId/friends/friendId")
    .post(newFriend)
    .delete(deleteFriend)

module.exports = router