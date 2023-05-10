let express = require("express");
let router = express.Router();
let userControllers = require("../controllers/userController"); 

router.get("/", (req, res) => {
    userControllers.getUser(res);
  });
  
  router.post("/add", (req, res) => {

    userControllers.addUser(req.body, res);
  });
  
  router.put("/:id", (req, res) => {
    userControllers.updateUser(req, res);
  });
  
  router.delete("/:id", (req, res) => {
    userControllers.deleteUser(req, res);
  });

module.exports = router;