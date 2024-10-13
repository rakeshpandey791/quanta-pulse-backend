const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    additionalName: {
      tyoe: String,
    },
    pronouns: {
      type: String,
      enum: ["She/Her", "He/Him", "They/Them", "Custom"],
    },
    headline: {
      type: String,
      require: true,
    },
    showCurrentCompany: {
      type: Boolean,
      default: null,
    },
    industry: {
      type: String,
      required: true,
    },
    showSchool: {
      type: Boolean,
      default: null,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
