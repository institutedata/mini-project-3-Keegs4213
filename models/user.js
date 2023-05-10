const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//importing mongoose library and creating schema

const userSchema = new Schema(
  {
    id: { type: Number, trim: true, required: true },
    name: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
  },
  {
    versionKey: false, 
  }
);

module.exports = mongoose.model("user", userSchema);
