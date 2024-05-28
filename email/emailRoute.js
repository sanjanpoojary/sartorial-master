const express = require("express");
// const multer = require("multer");
const sendEmail = require("./sendEmail");

const router = express.Router();
// const storage = multer.memoryStorage();
// OR
// const storage = multer.diskStorage({
//   destination: "./files",
//   filename: function (req, file, cb) {
//     return cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage });

router.post("/send-email", async (req, res) => {
  try {
    const { username, email, subject, content } = req.body;
    // const attachment = req.file;
    // console.log("Received attachment:", req.file);

    const result = await sendEmail(
      username,
      email,
      subject,
      content
      // attachment
    );
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in sending email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email",
    });
  }
});

module.exports = router;
