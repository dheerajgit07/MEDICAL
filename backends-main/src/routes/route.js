const express = require('express');
const multer = require('multer');

const { CreateUser, otpVerification, UserLogIn } = require('../controller/userController')
const { AddProduct, GetProducts, UpdateProduct, DeleteProduct } = require('../controller/productController')
const { AdminLogIn, AdminOTPVerification ,} =require('../controller/AdminController')
const { validUser, validUserLog } = require('../middewale/AllAuth')


const router = express.Router();

const storage = multer.memoryStorage(); 
const upload = multer({ storage });
  

router.post('/CreateUser', upload.single('profileImg'), validUser, CreateUser)
router.post('/otpVerification/:userId', otpVerification)
router.post('/UserLogIn', validUserLog, UserLogIn)
router.post('/AdminLogIn', validUserLog, AdminLogIn)
router.post('/AdminOTPVerification/:id', AdminOTPVerification)

// Product CRUD Routes
router.get("/products", GetProducts);
router.post("/add-item", upload.single("image"), AddProduct);
router.put("/update-item/:id", upload.single("image"), UpdateProduct);
router.delete("/delete-item/:id", DeleteProduct);

// Category Routes
const { GetCategories, AddCategory } = require('../controller/categoryController');
router.get("/categories", GetCategories);
router.post("/add-category", AddCategory);

// Auth Routes
const { ForgotPassword } = require('../controller/authController');
router.post("/forgot-password", ForgotPassword);


router.all('/*', (req, res) => { return res.status(404).send({ status: false, msg: 'Invalid URL' }) })

module.exports = router;
