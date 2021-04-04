const express = require('express');
const router = express.Router();

//Auth controller functions
const {
  signupProcessUser,
  loginProcess,
  logout,
  profileView,
  editProfile,
  deleteProfile,
  currentUser
} = require('../controllers/authcont')


router.post('/signup', signupProcessUser);

router.post('/login', loginProcess);

router.get('/logout', logout);

router.get('/current-user', currentUser)

router.put('/EditProfile', editProfile);


module.exports = router;
