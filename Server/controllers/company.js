import Company from "../models/Company.js";

export const updateCompany = async (req,res,next)=>{
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCompany);
  } catch (err) {
    next(err);
  }
}
export const deleteCompany = async (req,res,next)=>{
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.status(200).json("Company has been deleted.");
  } catch (err) {
    next(err);
  }
}
export const getCompany = async (req,res,next)=>{
  try {
    const company = await Company.findById(req.params.id);
    res.status(200).json(company);
  } catch (err) {
    next(err);
  }
}
export const getCompanys = async (req,res,next)=>{
  try {
    const companys = await Company.find();
    res.status(200).json(companys);
  } catch (err) {
    next(err);
  }
}