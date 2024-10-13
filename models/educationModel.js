const mongoose = require("mongoose");

const EducationsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    school: {
      type: String,
      required: true,
    },
    schoolLogo: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    fieldOfStudy: {
      type: String,
      required: true,
    },
    startDateMonth: {
      type: String,
      required: true,
    },
    startDateYear: {
      type: String,
      required: true,
    },
    endDateMonth: {
      type: String,
      required: true,
    },
    endDateYear: {
      type: String,
      required: true,
    },
    grade: {
      type: String,
    },
    activityAndSocial: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Education", EducationsSchema);
