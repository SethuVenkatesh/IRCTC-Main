const mongoose = require('mongoose');


const User = mongoose.Schema({
  userName:"String",
  password:"String",
  preferedLanguage:"String",
  secretQuestion:"String",
  secretAnswer:"String",
  firstName:"String",
  middleName:"String",
  lastName:"String",
  occupation:"String",
  dateOfBirth:"String",
  email:"String",
  gender:"String",
  phoneNumber:"String",
  flatNo:"String",
  city:"String",
  street:"String",
  pinCode:"String",
  area:"String",
  state:"String",
});

module.exports = mongoose.model('User', User);