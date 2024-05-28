const nodemailer = require("nodemailer");
const keys = require("../config/keys");

const sendEmail = async (username, email, subject, content, attachment) => {
  try {
    console.log(keys.emailFrom, keys.emailPass);
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: keys.emailFrom,
        pass: keys.emailPass,
      },
    });
    let mailOptions = {
      from: `<${username}> <${email}>`,
      replyTo: email,
      to: keys.emailFrom,
      subject: subject || "Support",
      text: `Hello Admin,\n\nNew support request from ${username} (${email}):\n\n${content}`,
      bcc: keys.bccEmails,
      // attachments: [],
    };
    // if (attachment) {
    //   mailOptions.attachments.push({
    //     filename: attachment.originalname,
    //     content: attachment.buffer,
    //   });
    // }
    let result = await transporter.sendMail(mailOptions);
    // console.log("Email sent Successfully");
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    // console.log("Error in sending email", error);
    // throw new Error("Failed to send email");
  }
};

module.exports = sendEmail;
