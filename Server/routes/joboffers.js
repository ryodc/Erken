import express from "express";
import {
  updateJoboffer,
  deleteJoboffer,
  getJoboffer,
  getJoboffers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyCompany } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

//UPDATE
router.put("/:id", verifyCompany, updateJoboffer);

//DELETE
router.delete("/:id", verifyCompany, deleteJoboffer);

//GET
router.get("/:id", verifyCompany, getJoboffer);

//GET ALL
router.get("/", verifyAdmin, getJoboffers);

export default router;
