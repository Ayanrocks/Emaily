const mongoose = require("mpongoose");
const requireLogin = require("../middlewares/requireLogin");
const creditsCheck = require("../middlewares/creditsCheck");

const Survey = mongoose.model("Surveys");
module.exports = app => {
  app.post("/api/surveys", requireLogin, creditsCheck, (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    })
    .save();
  });
};
