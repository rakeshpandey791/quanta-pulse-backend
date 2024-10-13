const mongoose = require("mongoose");

const ContactInfoModel = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  profileUrl: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  phoneType: {
    type: String,
    enum: ["Home", "Work", "Mobile"],
    required: true,
  },
  address: {
    type: String,
  },
  birthdayMonth: {
    type: String,
  },
  birthdayDay: {
    type: String,
  },
});

module.exports = mongoose.model("ContactInfo", ContactInfoModel);
