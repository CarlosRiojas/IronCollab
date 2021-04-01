const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: String,
    password: String,
    name: {
      type: String,
      default: "newUser"
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email', passwordField: "password", nameField: "name" });

module.exports = model('User', userSchema);
