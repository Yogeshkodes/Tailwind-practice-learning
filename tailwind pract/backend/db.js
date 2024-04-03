const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect(
  "// mongodb+srv://Yogeshkodes:%40RONALDo%4007%40@cluster0.axgl13t.mongodb.net/"
);

const Usertable = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("User", Usertable);

module.exports = user;
