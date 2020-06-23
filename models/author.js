const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author name is required!"],
        trim: true,
        unique: true,
        lowercase: true,
    },
});

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
