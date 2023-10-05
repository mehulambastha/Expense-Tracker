const express = require("express")
const router = express.Router()
const {loginUser, registerUser, currentUser} = require("../../controllers/userController")
const validate = require("../../middleware/validateToken")

router.route("/login").post(loginUser)
router.route("/register").post(registerUser)
router.route("/").get((req, res)=>{
    res.status(200).json({Message: "User root path"})
})
router.route("/current").get(validate, currentUser)

module.exports = router
