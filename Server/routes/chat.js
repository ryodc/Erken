const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// Get all users to chat with
router.get("/users", authorization, async (req, res) => {
  try {
    const users = await pool.query("SELECT user_name, user_id FROM users");
    res.json(users.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Get existing chat contacts

//NO BUENO YET

// router.get("/chats", authorization, async (req, res) => {
//   try {
//     const chats = await pool.query(
//       "SELECT * FROM chats WHERE username_1 = $1 OR username_2 = $1",
//       [req.user]
//     );

//     res.json(chats.rows[0]);
//   } catch (e) {
//     console.error(e.message);
//     res.status(500).send("Server error");
//   }
// });

// MAKE CHAT
router.post("/addchat", authorization, async (req, res) => {
  try {
    const { id } = req.body;

    const newChat = await pool.query(
      "INSERT INTO chat (username_1, username_2) VALUES ($1, $2)",
      [req.user, id]
    );

    res.json(newChat.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});
// DELETE CHAT
router.delete("/deletechat", authorization, async (req, res) => {
  try {
    const { id } = req.body;

    const deletechat = await pool.query(
      "DELETE FROM chat WHERE username_1 = $1 AND username_2 = $2 OR username_1 = $2 AND username_2 = $1",
      [id, req.user]
    );

    res.json("Chat is deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// SHOW MESSAGES FROM CHAT
router.get("/messages", authorization, async (req, res) => {
  try {
    const { chatid } = req.body;

    const chatmessages = await pool.query(
      "SELECT * FROM message WHERE chat_id = $1",
      [chatid]
    );

    res.json(chatmessages.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// ADD MESSAGE
router.post("/addmessage", authorization, async (req, res) => {
  try {
    const { messagetext, receiver, chat_id } = req.body;

    const addMessage = await pool.query(
      "INSERT INTO message ( message_text, username_receiver, chat_id, username_sender) VALUES ($1, $2, $3, $4)",
      [messagetext, receiver, chat_id, req.user]
    );

    res.json(addMessage.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// DELETE MESSAGE
router.delete("/deletemessage", authorization, async (req, res) => {
  try {
    const { messageid } = req.body;

    const deleteMessage = await pool.query(
      "DELETE FROM message WHERE message_id = $1",
      [messageid]
    );

    res.json("Message is deleted");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
