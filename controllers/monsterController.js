"use strict";

const axios = require("axios"); // npm i
const Models = require("../models"); //matches index.js



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
const addFavoriteMonster = async (body, res) => {
  const { userId, monsterId } = body;

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://mhw-db.com/monsters/${monsterId}`,
    headers: {}
  };

  // Step 1 - retrieve monsters from API
  let monster = await axios.request(config)
    .then((response) => {
      
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  // Step 2 - modify monster to include userId
    monster.userId = userId

  // Step 3 - add monster to user's favorite Monster collection
    Models.FavoriteMonster(monster)
    .save()
    .then((data) => res.send({ result: 200, data: data, message: "Monster added to favorites"}))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};



// delete favorite monster from database
const deleteFavoriteMonster = async (req, res) => {
  const { userId, monsterId } = req.body;

  Models.FavoriteMonster.deleteOne({id: monsterId , userId: userId })
  .then((response)=>{
    res.status(200).send({
      result: 200,
      data: response,
      message: "Favorite monster deleted successfully",
    });
  })
  .catch((err)=>{res.send(err)}) 
  
};

//Find all user's favorites
  const getFavoritesByUserId = async (userId, res) => {

Models.FavoriteMonster.find({userId: userId})
.then((response)=>{
  res.status(200).send({
    result: 200,
    data: response,
    message: "User's favorite monster(s) retrieved successfully",
  });
})
  }


module.exports = {
    getAllMonsters,
    addFavoriteMonster,
    deleteFavoriteMonster,
     getFavoritesByUserId,
}