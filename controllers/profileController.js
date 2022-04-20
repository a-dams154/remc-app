

const debug = require('debug')('todo-api:controllers/todo');
require('express-async-errors');
const modelService = require('../services/modelService');
const ImageModel = require('../models/imageModel');
const User = require('../models/userModel');
const commonMethods = require('../utilities/common');
//const profileService = new modelService(Profile);
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs')
//const dotenv = require('dotenv');
const multer  = require('multer')
var jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/response');
require("dotenv").config();



//storage

exports.profile = (req,res) => {
   console.log(req.file)
}
