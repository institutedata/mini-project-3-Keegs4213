const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//importing mongoose library and creating schema

const favoriteMonsterSchema = new Schema ({
    userId: {type: String, trim: true, required: true},
    id: {type: Number, trim: true, required: true},
    name: {type: String, trim: true, required: true},
    type: {type: String, trim: true, require: true},
    species: {type: String, trim: true, require: true},
    description: {type: String, trim: true, require: true},
    elements: {type: Array, trim: true, require: true},
},{
    versionKey: false 
});

module.exports = mongoose.model("favoriteMonster", favoriteMonsterSchema);