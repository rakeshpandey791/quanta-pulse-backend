const mongoose = require("mongoose");

const PositionsSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    enum: [
      "Full-time",
      "Part-time",
      "Self-employed",
      "Freelance",
      "Intership",
      "Trainee",
    ],
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  companyLogo: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  locationType: {
    type: String,
    enum: ["On-site", "Hybrid", "Remote"],
  },
  isCurrentlyWorking: {
    type: Boolean,
    default: null,
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
    required: false,
  },
  endDateYear: {
    type: String,
    required: false,
  },
  description: {
    type: String,
  },
  prfileHeadline: {
    type: String,
  },
});

module.exports = mongoose.model("Positions", PositionsSchema);
