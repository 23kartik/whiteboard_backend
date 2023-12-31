const express = require("express");
const { registerUser, loginUser, saveDrawings, loadDrawings } = require("../controllers/userController");
// const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post('/save-drawings', saveDrawings);
router.get('/load-drawings', loadDrawings);


module.exports = router;