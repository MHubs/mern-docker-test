// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be Mongo's data structure
const DataSchema = new Schema(
    {
        id: Number,
        firstname: String,
        lastname: String,
        username: String
    },
    { timestamps: true }
);

// export the new Schema so we can modify it using Node
module.exports = mongoose.model("Data", DataSchema);