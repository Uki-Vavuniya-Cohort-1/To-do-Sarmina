const Mongoose = require("mongoose");
const schema = new Mongoose.Schema({
    userid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true  
    },
    created_note: {
        type: Array,
    }

});
const Model = Mongoose.model('User', schema);
module.exports = Model;
