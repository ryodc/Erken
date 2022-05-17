import express from "express";
import {
  updateCompany,
  deleteCompany,
  getCompany,
  getCompanys,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyCompany } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello Company, you are logged in")
// })

// router.get("/checkCompany/:id", verifyCompany, (req,res,next)=>{
//   res.send("hello Company, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

//UPDATE
router.put("/:id", verifyCompany, updateCompany);

//DELETE
router.delete("/:id", verifyCompany, deleteCompany);

//GET
router.get("/:id", verifyCompany, getCompany);

//GET ALL
router.get("/", verifyAdmin, getCompanys);

export default router;