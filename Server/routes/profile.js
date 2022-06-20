const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// GET PROFILE met WHERE STATEMENT
router.get("/", authorization, async (req, res) => {
  try {
    const profile = await pool.query("SELECT user_name, user_email, user_firstname, user_lastname, user_phonenumber, user_city, user_street, user_postalcode FROM users WHERE user_id = $1", [
      req.user
    ]);

    res.json(profile.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})


// UPDATE PROFILE met SET statement
router.put("/update", authorization, async (req, res) => {
  try {
    const { username, firstname, lastname, phonenumber, city, street, postalcode } = req.body;

    const updateProfile = await pool.query("UPDATE users SET user_name = $1, user_firstname = $2, user_lastname = $4, user_phonenumber = $5, user_city = $6, user_street = $7, user_postalcode = $8 WHERE user_id = $3", 
    [username, firstname, req.user, lastname, phonenumber, city, street]);

    res.json("profile was updated");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");    
  }
})
// 63112a1e-1f2e-40c8-abab-cfb0eb24a08d

module.exports = router;