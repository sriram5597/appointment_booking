const auth = require('../utils/AuthFilter');

const { createShop, getShop, getShops, updateShop } = require('../handlers/ShopHandler');

const router = require('express').Router();

router.post('/add', auth, createShop);
router.get('/', getShops);
router.get('/:id', getShop);
router.patch("/:id", auth, updateShop);

module.exports = router;