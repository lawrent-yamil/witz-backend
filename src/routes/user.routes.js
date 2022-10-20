const router = require('express').Router();

const { registerUser,getAllUsers,loginUser } = require("../controllers/user.controller");


router.post("/register", registerUser);
router.post("/login",loginUser)

router.get("/all", getAllUsers);

module.exports = router;