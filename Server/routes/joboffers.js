const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

//GET ALL JOBOFFER

// router.get("/getalljoboffers", authorization , async (req, res) => {
//   try {
    
//     const joboffers = await pool.query("SELECT * FROM  joboffers");
//     res.json(joboffers.rows);
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");
//   }
// })

router.put("/iscompany", authorization, async (req, res) => {
  try {
    const iscompany = await pool.query("SELECT is_company FROM users WHERE user_id = $1", [
      req.user
    ]);

    res.json(iscompany.rows[0]);

  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
})

router.put("/userid", authorization, async (req, res) => {
  try {
    const userid = await pool.query("SELECT user_id FROM users WHERE user_id = $1", [
      req.user
    ])

    res.json(userid.rows[0]);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
})

router.put("/", authorization, async (req, res) => {
  try {
    // const joboffers = await pool.query(
    //   "SELECT * FROM joboffers WHERE user_id = $1",
    //   [req.user] 
    // ); 
    const joboffers = await pool.query(
      "SELECT * FROM joboffers",
    ); 
    res.json(joboffers.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// POST JOBOFFER
router.post("/addjoboffer", authorization ,async (req, res) => {
  try {
    const { jobtitle, jobdescription, jobsalary, jobcity, jobemployment } = req.body;

    const newJobOffer = await pool.query("INSERT INTO joboffers (job_title, job_description, job_salary, job_city, job_employment, user_id) VALUES ($1, $2, $3, $4, $5, $6)",
    [ jobtitle, jobdescription, jobsalary, jobcity, jobemployment, req.user]);
    res.json(newJobOffer.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getspecificjoboffer = await pool.query("SELECT * FROM joboffers WHERE job_id = $1", [
      id
    ]);

    res.json(getspecificjoboffer.rows[0]);

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");   
  }
})

// router.put("/:id", authorization, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { jobtitle, jobdescription, jobsalary, jobcity, jobemployment } = req.body;

//     const updateJobOffer = await pool.query("UPDATE joboffers SET job_title = $1, job_description = $2, job_salary = $3, job_city = $4, job_employment = $5 WHERE job_id = $6 AND user_id = $7", 
//     [jobtitle, jobdescription, jobsalary, jobcity, jobemployment, id, req.user]);

//     res.json("Joboffer was updated");
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send("Server error");    
//   }
// })

router.delete("/:id", authorization,async (req, res) => {
  try {
    const { id } = req.params;
    const updateJobOffer = await pool.query("DELETE FROM joboffers WHERE job_id = $1",
    [id]);

    if (updateJobOffer.rows.length === 0) {
      return res.json("this joboffers is not yours");
    }

    res.json("Joboffer is deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");  
  }
})

module.exports = router