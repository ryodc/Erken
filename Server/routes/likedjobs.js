const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");



router.get("/", authorization, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT user_id FROM users WHERE user_id = $1",
      [req.user] 
    ); 
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// GET all likedjobs
router.get("/getlikedjobs", authorization, async (req, res) => {
  try {
    const likedjobs = await pool.query(
      "SELECT likedjob_id, likedjobs.job_id, job_title, job_description, job_salary, job_city, job_employment, job_created_at ,likedjobs.user_id from likedjobs INNER JOIN joboffers on likedjobs.job_id = joboffers.job_id WHERE likedjobs.user_id = $1",[
      req.user
    ]);

    //const likedjobs = await pool.query("select * from likedjobs where user_id = $1", [req.user]);

    res.json(likedjobs.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})


// POST likedjobs
router.post("/likejoboffer", authorization, async (req, res) => {
  try {
    const { id } = req.body;

    const likedjob = await pool.query("SELECT * FROM likedjobs where job_id = $1", [id]);
    if ( likedjob.rows.length !== 0 ) {
      return res.status(401).send("Liked job already exists");
    }


    const newLikedJob = await pool.query("INSERT INTO likedjobs (job_id, user_id) VALUES ($1, $2)", 
    [ id, req.user ]);

    res.json(newLikedJob.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
})

// DELETE likedjob
router.delete("/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const deletelikedjob = await pool.query("DELETE FROM likedjobs WHERE job_id = $1 AND user_id = $2",
    [id, req.user]);

    res.json("Joboffer is deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");  
  }
})



module.exports = router