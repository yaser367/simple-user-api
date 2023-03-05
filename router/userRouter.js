const express = require("express");
const userController = require('../controller/userController')
const router = express.Router()

router.route("/").post(userController.createUser).get(userController.getUsers);
router.route("/:id").put(userController.editUser).delete(userController.deleteUser);
module.exports = router;
