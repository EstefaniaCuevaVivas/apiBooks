const {Router}= require ("express")
const router = Router();
const userCtrl = require("../controller/user.controller");



router.put("/usuarios",userCtrl.putUser)

module.exports = router;