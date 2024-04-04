const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect(
  "// mongodb+srv://Yogeshkodes:%40RONALDo%4007%40@cluster0.axgl13t.mongodb.net/"
);

// Create a Schema for Users
const userSchema = new mongoose.Schema({
  username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minLength: 3,
      maxLength: 30
  },
  password: {
      type: String,
      required: true,
      minLength: 6
  },
  firstName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50
  },
  lastName: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50
  }
});

const accountSchema = new mongoose.Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to User model
      ref: 'User',
      required: true
  },
  balance: {
      type: Number,
      required: true
  }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
User,
  Account
};