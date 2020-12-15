const { admin } = require('googleapis/build/src/apis/admin');
const { createAdmin, adminLogin } = require('../handlers/AdminHandler');

const router = require('express').Router();

router.get("/create", createAdmin);
router.post("/login", adminLogin);

module.exports = router;