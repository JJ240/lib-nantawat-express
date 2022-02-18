const express = require('express');
const router = express.Router();
const memberController = require('../controllers/memberController');
const auth = require('../middleware/auth');

router.get("",memberController.getMembers);
router.get("/:id",memberController.getMemberById);

router.post("/register",memberController.addMember);
router.post("/login",memberController.login);

router.put("/:id",auth,memberController.updateMember);

router.delete("/:id",auth,memberController.deleteMember);

module.exports = router;
