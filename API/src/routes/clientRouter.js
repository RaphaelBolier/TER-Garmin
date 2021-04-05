const router = require('express').Router();

const controller = require('../controllers/client.js');

router.get("/", controller.getAll);
router.get("/new",controller.createOne);
router.get("/remove/:id",controller.deleteOne);
router.get("/update/:id",controller.updateOne);

module.exports = router;