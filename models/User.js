const { Schema, model } = require('mongoose')

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true, //not a validator, unique option is a helper
            required: true,
            trim: true,
        },
        email: {
            type: String, 
            unique: true,
            required: true,
            //email address validation,
        },
        thoughts: {
            // array of _id values referencing the Thought model
        },
        friends: {
            // array of _id values referencing the User model (self-reference)
        },
    }
)

const User = model("user", userSchema)

module.exports = User