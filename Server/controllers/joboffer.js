import Joboffer from "../models/Joboffer.js";

export const updateJoboffer = async (req,res,next)=>{
  try {
    const updatedjoboffer = await Joboffer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedjoboffer);
  } catch (err) {
    next(err);
  }
}
export const deleteJoboffer = async (req,res,next)=>{
  try {
    await Joboffer.findByIdAndDelete(req.params.id);
    res.status(200).json("Joboffer has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getJoboffer = async (req,res,next)=>{
  try {
    const joboffer = await Joboffer.findById(req.params.id);
    res.status(200).json(joboffer);
  } catch (err) {
    next(err);
  }
}
export const getJoboffers = async (req,res,next)=>{
  try {
    const joboffers = await Joboffer.find();
    res.status(200).json(joboffers);
  } catch (err) {
    next(err);
  }
}