const { Schema, Types } = require("mongoose")

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        //TODO: not showing up 
        createdAt: {
            type: Date,
            default: Date.now,
            //use getter method to format timestamp on query
            get: (date) => {
                return new Date(date).toLocaleDateString
            },
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
)

module.exports = reactionSchema