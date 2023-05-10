const express = require("express");
const { register, login, getPersonData } = require("../controllers/personControllers");
const { authMidedleware } = require("../middlewares/athMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/", authMidedleware,getPersonData);
module.exports = router;
