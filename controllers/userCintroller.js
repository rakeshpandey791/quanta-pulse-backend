const User = require("./../models/userModel");
const ConatactInfo = require("./../models/cotactInfoModel");
const Education = require("./../models/educationModel");
const Position = require("./../models/positionModel");

exports.getUserData = async (req, res) => {
  try {
    const { userId } = req.params;
    const userMap = {};
    const userData = await User.findById({ _id: userId });
    const positions = await Position.find({ userId: userId });
    const education = await Education.find({ userId: userId });
    const contactInfo = await ConatactInfo.find({ userId: userId });

    res.status(200).json({
      userData: userData,
      positions: positions,
      educations: education,
      contactInfo: contactInfo,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    additionalName,
    pronouns,
    headline,
    showCurrentCompany,
    industry,
    showSchool,
    country,
    city,
    website,
  } = req.body;

  try {
    const newUser = new User({
      firstName,
      lastName,
      additionalName,
      pronouns,
      headline,
      showCurrentCompany,
      industry,
      showSchool,
      country,
      city,
      website,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Create user contact info
exports.createUserContactInfo = async (req, res) => {
  const {
    userId,
    profileUrl,
    email,
    phoneNumber,
    phoneType,
    address,
    birthdayMonth,
    birthdayDay,
  } = req.body;

  try {
    const userConatactInfo = new ConatactInfo({
      userId,
      profileUrl,
      email,
      phoneNumber,
      phoneType,
      address,
      birthdayMonth,
      birthdayDay,
    });

    await userConatactInfo.save();
    res.status(201).json(userConatactInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createUserEducation = async (req, res) => {
  const {
    userId,
    school,
    degree,
    fieldOfStudy,
    startDateMonth,
    startDateYear,
    endDateMonth,
    endDateYear,
    grade,
    activityAndSocial,
    description,
  } = req.body;

  try {
    const newEducation = new Education({
      userId,
      school,
      degree,
      fieldOfStudy,
      startDateMonth,
      startDateYear,
      endDateMonth,
      endDateYear,
      grade,
      activityAndSocial,
      description,
    });

    await newEducation.save();
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.createUserPosition = async (req, res) => {
  const {
    userId,
    title,
    employmentType,
    companyName,
    location,
    locationType,
    isCurrentlyWorking,
    startDateMonth,
    startDateYear,
    endDateMonth,
    endDateYear,
    description,
    prfileHeadline,
  } = req.body;

  try {
    const newPosition = new Position({
      userId,
      title,
      employmentType,
      companyName,
      location,
      locationType,
      isCurrentlyWorking,
      startDateMonth,
      startDateYear,
      endDateMonth,
      endDateYear,
      description,
      prfileHeadline,
    });

    await newPosition.save();
    res.status(201).json(newPosition);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
