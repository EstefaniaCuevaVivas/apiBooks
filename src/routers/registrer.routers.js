const {Router}= require ("express")
const router = Router();
const registrerCtrl = require("../controller/registrer.controller")



router.get("/registrar",registrerCtrl.getUser)
router.post("/registrar",registrerCtrl.postUser)



module.exports = router;