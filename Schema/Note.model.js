const Mongoose = require("mongoose");
// const User = require("./Shcema/User.model.js");
const schema = new Mongoose.Schema({
  id: {
    type: String,
    require: true,
    unique: true
  },
  title: {
    type: String
  },
  created_by: {
    type: String,
  },
  created_on: {
    type: Date
  },
  contant: {
    type: String
  },
  dead_line: {
    type: Date
  },
  status: {
    type: String
  }
});
const Model = Mongoose.model('To-Do List', schema);
module.exports = Model;

