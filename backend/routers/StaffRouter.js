const Auth = require('../utils/AuthFilter');

const { createStaff, getStaffs, deleteStaff, updateStaff } = require('../handlers/StaffHandler');

const router = require('express').Router();

router.post("/:id/add", Auth, createStaff);
router.get("/:id", getStaffs);
router.delete("/:id", Auth, deleteStaff);
router.patch("/:id", Auth, updateStaff);

module.exports = router;