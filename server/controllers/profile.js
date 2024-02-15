import Profile from "../models/ProfileModel";

export const createProfile = async (req, res, next) => {
  const newProfile = new Profile (req.body);
  try {
    const savedProfile = await newProfile.save();
    res.status(200).json(savedProfile);
  } catch (err) {
    next(err);
  }
};

export const updateProfile = async (req,res,next)=>{
  try {
    const updatedprofile = await Profile.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedprofile);
  } catch (err) {
    next(err);
  }
}
export const getProfile = async (req,res,next)=>{
  try {
    const user = await Profile.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}
