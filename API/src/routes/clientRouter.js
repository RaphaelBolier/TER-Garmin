const router = require('express').Router();

const controller = require('../controllers/client.js');

router.get("/", controller.getAll);
router.post("/new",controller.createOne);
router.get("/remove/:idClient",controller.deleteOne);
router.get("/update/:idClient",controller.updateOne);

module.exports = router;