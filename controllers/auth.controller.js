const asyncHandler = require("express-async-handler")
const Admin = require("../model/Admin")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.registerAdmin = asyncHandler(async (req, res) => {
    const { name, password, email } = req.body
    const Found = await Admin.findOne({ email })
    if (Found) {
        res.status(400).json({ message: "Email Already Exist" })
    }
    const hash = await bcrypt.hash(password, 10)
    await Admin.create({ name, email, password: hash, })
    // await sendEmail({ to: email, subject: "Registration Success", message: `<h1>WelCome, ${req.body.name}.</h1>` })
    res.json({ message: `${req.body.name} Register Success` })
})

exports.LoginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const found = await Admin.findOne({ email })
    if (!found) {
        return res.status(400).json({ message: "Email Not Fount" })
    }

    const verify = await bcrypt.compare(password, found.password)
    if (!verify) {
        return res.status(400).json({ message: "Password Do Not Match" })
    }
    const token = jwt.sign({ userId: found._id }, process.env.JWT_KEY)

    res.cookie('admin', token, { httpOnly: true })

    res.json({
        message: "login Successs", result: {
            _id: found._id,
            name: found.name,
            email: found.email,
        }
    })
})
exports.registerUser = asyncHandler(async (req, res) => {
    const { name, password, email } = req.body
    const Found = await User.findOne({ email })
    if (Found) {
        res.status(400).json({ message: "Email Already Exist" })
    }
    const hash = await bcrypt.hash(password, 10)
    await User.create({ name, email, password: hash, })
    // await sendEmail({ to: email, subject: "Registration Success", message: `<h1>WelCome, ${req.body.name}.</h1>` })
    res.json({ message: `${req.body.name} Register Success` })
})

exports.LoginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const found = await User.findOne({ email })
    if (!found) {
        return res.status(400).json({ message: "Email Not Fount" })
    }
    const verify = await bcrypt.compare(password, found.password)
    if (!verify) {
        return res.status(400).json({ message: "Password Do Not Match" })
    }
    const token = jwt.sign({ userId: found._id }, process.env.JWT_KEY)

    res.cookie('User', token, { httpOnly: true })

    res.json({
        message: "login Successs", result: {
            _id: found._id,
            name: found.name,
            email: found.email,
        }
    })
})

exports.logoutAdmin = asyncHandler(async (req, res) => {
    res.clearCookie("admin")
    res.json({ message: "Admin Logout Success" })
})