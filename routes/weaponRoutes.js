let express = require("express");
let router = express.Router();
let WeaponController = require("../controllers/weaponController"); //index.js

router.get("/", (req, res) => {  // get all weapons in the database
    WeaponController.getAllWeapons(res);
  });

  router.get("/by-user/:userId", (req, res) => {  // get all favorite weapons by userID

    let userId = req.params.userId

    WeaponController.getFavoriteWeaponsByUserId(userId, res);
  });
  
  router.post("/add", (req, res) => {
    WeaponController.addFavoriteWeapon(req.body, res);
  });
  
  
  router.delete("/", (req, res) => {
    WeaponController.deleteFavoriteWeapon(req, res);
  });

module.exports = router;