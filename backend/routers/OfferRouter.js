const router = require('express').Router();

const Auth = require('../utils/AuthFilter');
const {
    addOffer, getOffers, updateOffer, deleteOffer,
} = require('../handlers/OfferHandler');

router.post('/:id/create', Auth, addOffer);
router.get('/:id', getOffers);
router.patch('/:id', Auth, updateOffer);
router.delete('/:id', Auth, deleteOffer);

module.exports = router;
