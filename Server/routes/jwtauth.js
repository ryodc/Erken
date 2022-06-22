const router = require("express").Router();
const pool = require("../db")
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

router.post("/register", validInfo ,async (req, res) => {
  try {
    
    const { name, email, password, iscompany, firstname, lastname, phonenumber, city, street, postalcode } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ]);
    
  if ( user.rows.length !== 0 ) {
    return res.status(401).send("User already exists");
  }

  const saltRound = 10
  const salt = await bcrypt.genSalt(saltRound);

  const bcryptpassword = await bcrypt.hash(password, salt);
  
  const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password, is_company, user_firstname, user_lastname, user_phonenumber, user_city, user_street, user_postalcode) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *", [
    name, email, bcryptpassword, iscompany, firstname, lastname, phonenumber, city, street, postalcode
  ]);

  const token = jwtGenerator(newUser.rows[0].user_id);

  res.json({token});



  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})

router.post("/login", validInfo ,async (req, res) => {
  try {
    
    const { email , password } = req.body;


    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

    if (user.rows.length === 0) {
      return res.status(401).json("Password or Email is incorrect");
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].user_password);

    if ( !validPassword ) {
      return res.status(401).json("Password or Email is incorrect")
    }

    const token = jwtGenerator(user.rows[0].user_id);

    res.json({token});

  } catch (error) {
    console.error(error.message);
  }
});

router.post("/is-verify", authorization, async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})

module.exports = router;