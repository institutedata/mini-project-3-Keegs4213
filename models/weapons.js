const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//importing mongoose library and creating schema

const weaponSchema = new Schema(
  {
    id: { type: Number, trim: true, required: true },
    name: { type: String, trim: true, required: true },
    type: { type: String, trim: true, require: true },
    rarity: { type: Number, trim: true, require: true },
    defense: { type: Number, trim: true, require: true },
    resistances: { type: Array, trim: true, require: true },
  },
  {
    versionKey: false, 
  }
);

module.exports = mongoose.model("weapon", weaponSchema);
