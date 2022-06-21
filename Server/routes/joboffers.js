const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

//GET ALL JOBOFFER
// router.get("/", authorization, async (req, res) => {
//   try {
    
//     const joboffers = await pool.query("SELECT * FROM  joboffers");
//     res.json(joboffers.rows);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
//   }
// })
router.post("/", authorization, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT user_name FROM users WHERE user_id = $1",
      [req.user] 
    ); 
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// POST JOBOFFER
router.post("/addjoboffer", authorization ,async (req, res) => {
  try {
    const { jobtitle, jobdescription, jobsalary, jobcity, jobemployment } = req.body;

    const newJobOffer = await pool.query("INSERT INTO joboffers (user_id, job_title, job_description, job_salary, job_city, job_employment) VALUES ($1, $2, $3, $4, $5, $6)",
    [req.user, jobtitle, jobdescription, jobsalary, jobcity, jobemployment]);
    res.json(newJobOffer.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})

router.put("/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const { jobtitle, jobdescription, jobsalary, jobcity, jobemployment } = req.body;

    const updateJobOffer = await pool.query("UPDATE joboffers SET job_title = $1, job_description = $2, job_salary = $3, job_city = $4, job_employment = $5 WHERE job_id = $6 AND user_id = $7", 
    [jobtitle, jobdescription, jobsalary, jobcity, jobemployment, id, req.user]);

    res.json("Joboffer was updated");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");    
  }
})

router.delete("/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const updateJobOffer = await pool.query("DELETE FROM joboffers WHERE job_id = $1 AND user_id = $2",
    [id, req.user]);

    res.json("Joboffer is deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");  
  }
})

module.exports = router