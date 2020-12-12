const express = require("express");
const cors = require("cors");
const env = require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser());
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "yahoo",
  name: "serverName",
  auth: {
    user: process.env.EM,
    pass: process.env.PS,
  },
});

app.post("/sendmail", (req, res) => {
  const email = req.body.email;
  const text = req.body.text;

  var mailOptions = {
    from: process.env.EM,
    to: "jared_garcia@aol.com",
    subject: "Potential Job Interview",
    text: email + " " + text,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send({ message: true });
    }
  });
});

app.listen(process.env.PORT || 8080, (req, res) => {
  console.log("server up");
});
