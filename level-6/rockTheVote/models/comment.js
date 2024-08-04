const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema ({

    text : {
        type : String,
        required : true
    },

    issueId: {
        type: Schema.Types.ObjectId,
        ref: "Issue"
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});






module.exports = mongoose.model ('Comment',commentSchema) ;