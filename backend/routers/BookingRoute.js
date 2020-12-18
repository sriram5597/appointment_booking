const Auth = require("../utils/AuthFilter");

const { bookAppointment, viewBooking, bookingsByUser, bookingByShop, cancelBooking } = require('../handlers/BookingHandler');

const router = require('express').Router();

router.post("/add", Auth, bookAppointment);
router.get("/:id", Auth, viewBooking);
router.get("/", Auth, bookingsByUser);
router.get("/shop/:id", Auth, bookingByShop);
router.delete("/:id", Auth, cancelBooking)

module.exports = router;