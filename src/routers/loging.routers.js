const {Router}= require ("express")
const router = Router();
const logingCtrl = require("../controller/loging.controller")


router.get("/login",logingCtrl.getUser)

router.post("/login",logingCtrl.postUserLoging)







module.exports = router;