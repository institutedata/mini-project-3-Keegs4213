let express = require("express");
let router = express.Router();
let MonsterController = require("../controllers/monsterController"); //index.js

router.get("/", (req, res) => {  // get all monsters in the database
    MonsterController.getAllMonsters(res);
  });

  router.get("/by-user/:userId", (req, res) => {  // get all favorite monsters by userID

    let userId = req.params.userId

    MonsterController.getFavoriteMonsterByUserId(userId, res);
  });
  
  router.post("/add", MonsterController.addFavoriteMonster);
  
  router.delete("/delete", (req, res) => {
    MonsterController.deleteFavoriteMonster(req, res);
  });

module.exports = router;