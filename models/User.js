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
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please input a valid email"] //email address validation,
        },
        thoughts: [
            // array of _id values referencing the Thought model
            {
                type: Schema.Types.ObjectId,
                ref: "thought",
            },
        ],
        friends: [
            // array of _id values referencing the User model (self-reference)
            {
                type: Schema.Types.ObjectId,
                ref: "user"
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
)

userSchema.virtual("friendCount").get(function () {
    return this.friends.length
})

const User = model("user", userSchema)

module.exports = User