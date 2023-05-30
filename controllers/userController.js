"use strict";

const axios = require("axios"); // npm i
const Models = require("../models"); //matches index.js

const getUser = (res) => {
  //finds all users
  Models.User.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const addUser = (req, res) => {
  const user = req.body;

  console.log(user);
  new Models.User(user)
    .save()
    .then((result) => res.send({ result: 200, data: user }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateUser = (req, res) => {
  //updates the user matching the ID from the param using JSON data POSTed in request body
  console.log(req.body);
  Models.User.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
const deleteUser = (req, res) => {
  //deletes the user matching the ID from the param
  Models.User.findByIdAndRemove(req.params.userId, req.body, {
    useFindAndModify: false,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getUser,
  addUser,
  updateUser,
  deleteUser,
};
