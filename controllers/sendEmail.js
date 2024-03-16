const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendEmailEthereal = async (req, res) => {
  //let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "everardo.murazik@ethereal.email",
      pass: "Rt2V3q8eF2m4M6gcMH",
    },
  });

  let info = await transporter.sendMail({
    from: '"Kedar B" <kedarb@gmail.com>',
    to: "bar@example.com",
    subject: "Hello",
    html: "<h2>Sending Emails with Node.js</h2>",
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "ksbabaleshwar@gmail.com", // Change to your recipient
    from: "babaleshwarkedar@gmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

module.exports = { sendEmailEthereal, sendEmail };
