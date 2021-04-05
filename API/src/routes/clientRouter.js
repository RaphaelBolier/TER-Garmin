const router = require('express').Router();

const controller = require('../controllers/client.js');

router.get("/", controller.getAll);
router.post("/new",controller.createOne);
router.get("/remove",controller.deleteOne);
router.get("/update",controller.updateOne);

module.exports = router;