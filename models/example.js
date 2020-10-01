const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
  _id: {
    type: String,
    require: true
  },
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { _id: false } );

const Example = mongoose.model("Example", exampleSchema);

module.exports = Example;
