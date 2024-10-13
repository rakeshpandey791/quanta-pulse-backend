const express = require("express");
const User = require("./../models/userModel");

const router = express.Router();
const {
  createUser,
  createUserContactInfo,
  createUserEducation,
  createUserPosition,
  getUserData,
} = require("./../controllers/userCintroller");

router.get("/:userId", getUserData);

router.post("/", createUser);

router.post("/contactInfo", createUserContactInfo);

router.post("/education", createUserEducation);

router.post("/position", createUserPosition);

module.exports = router;
