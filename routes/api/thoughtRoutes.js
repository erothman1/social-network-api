const router = require("express").Router()

const {
    getThoughts, 
    getSingleThought, 
    createThought, 
    updateThought,
    deleteThought, 
    newThoughtReaction,
    deleteThoughtReaction
} = require("../../controllers/thoughtController")

router.route("/")
    .get(getThoughts)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought)

router.route("/:thoughtId")
    .get(getSingleThought)

router.route("/:thoughtId/reactions")
    .post(newThoughtReaction)
    .delete(deleteThoughtReaction)

module.exports = router