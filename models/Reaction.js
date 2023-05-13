const { Schema } = require("mongoose")

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new ObjectId(),
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
        createdAt: {
            type: Date, 
            default: Date.now, 
            //use getter method to format timestamp on query
            get: (date) => {
                return new Date(date).toLocaleDateString
            },
        }
    },
)

module.exports = reactionSchema