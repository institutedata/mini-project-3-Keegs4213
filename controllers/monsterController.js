"use strict";

const axios = require("axios"); // npm i
const Models = require("../models/monster"); //matches index.js


//Fetches all monsters
const getAllMonsters = (res)=>{

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://mhw-db.com/monsters',
    headers: { }
  };
  axios.request(config)
  .then((response) => {
    console.log(response.data);
    res.send(response.data)
  })
  .catch((error) => {
    console.log(error);
  });
}

// add favorite monster to database
const addFavoriteMonster = (req, res) => {

  let userId = req.userId



}

const updateFavoriteMonster = (req, res) => {

}

const deleteFavoriteMonster = (req, res) => {

}



module.exports = {
    getAllMonsters,
    addFavoriteMonster,
    updateFavoriteMonster,
    deleteFavoriteMonster
}