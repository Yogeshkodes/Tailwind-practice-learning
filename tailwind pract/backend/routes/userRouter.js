const express = require("express");
const zod = require("zod");
const router = express.Router();
const { user } = require("./../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("./../config");

const signupschema = zod.object({
  username: zod.string(),
  lastname: zod.string(),
  firstname: zod.string(),
  password: zod.string(),
});

router.post("/user", async (req, res) => {
  const body = req.body;
  const { success } = signupschema.safeParse(req.body);
  if (!success) {
    return res.json({
      message: "Email already taken / Inputs are incorrect  ",
    });
  }

  const User = user.findOne({ username: body.username });
  if (User._id) {
    return res.json({
      message: "Email already taken / Inputs are incorrect ",
    });
  }

  const dbUser = await user.create(body);
  const token = jwt.sign(
    {
      userID: dbUser._id,
    },
    JWT_SECRET
  );

  res.json({
    message: "USer created succesfully",
    token: token,
  });
});

module.exports = router;
