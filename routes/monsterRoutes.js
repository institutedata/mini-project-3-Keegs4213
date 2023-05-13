let express = require("express");
let router = express.Router();
let MonsterController = require("../controllers/monsterController"); //index.js

router.get("/", (req, res) => {  // get all monsters in the database
    MonsterController.getAllMonsters(res);
  });

  router.get("/by-user/:userId", (req, res) => {  // get all favorite monsters by userID

    let userID = req.params.userId

    Controllers.getMonstersByUserID(userId, res);
  });
  
  router.post("/add", (req, res) => {
    MonsterController.addFavoriteMonster(req.body, res);
  });
  
  router.put("/:id", (req, res) => {
    MonsterController.updateFavoriteMonster(req, res);
  });
  
  router.delete("/", (req, res) => {
    MonsterController.deleteFavoriteMonster(req, res);
  });

module.exports = router;