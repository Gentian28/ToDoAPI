const Mongoose = require('mongoose');

const NoteSchema = Mongoose.Schema(
    {
        title: String,
        text: String
    }, {
        timestamps: true
    }
);

module.exports = Mongoose.model('Note', NoteSchema);