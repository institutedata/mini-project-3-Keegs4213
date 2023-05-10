let express = require("express");
let router = express.Router();
let Controllers = require("../controllers/monsterController"); //index.js

router.get("/", (req, res) => {  // get all monsters in the database
    Controllers.getAllMonsters(res);
  });

  router.get("/by-user/:userId", (req, res) => {  // get all favorite monsters by userID

    let userID = req.params.userId

    Controllers.getMonstersByUserID(userId, res);
  });
  
  router.post("/add", (req, res) => {
    Controllers.monsterController.addFavoriteMonster(req.body, res);
  });
  
  router.put("/:id", (req, res) => {
    Controllers.monsterController.updateFavoriteMonster(req, res);
  });
  
  router.delete("/:id", (req, res) => {
    Controllers.monsterController.deleteFavoriteMonster(req, res);
  });

module.exports = router;