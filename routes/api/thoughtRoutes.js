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
    .get(getSingleThought)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought)

//TODO: not working 
router.route("/:thoughtId/reactions")
    .post(newThoughtReaction)
    .delete(deleteThoughtReaction)

module.exports = router