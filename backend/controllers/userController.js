const express = require("express")
const expressAsync = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")

const loginUser = expressAsync(async(req, res) => {
    const {username, password} = req.body
    

    // Check for user existence
    const user = await User.findOne({username})
    console.log("User found in DB: ", user) 
    // Verbose checking
    if(user){
        console.log(`Password given: ${password}\nPassword in database: ${user.password}`)
        if((await bcrypt.compare(password, user.password))) {
            // Creating JWT token
            const accessToken = jwt.sign({
                data : {
                    username: user.username,
                    password: user.password,
                    id: user._id
                }
            }, process.env.PVT_KEY, {expiresIn: "240m"})
            
            // Success message
            console.log(`Login successful! \nDetails of logged in user:\n${username, password}\nAccess Token: ${accessToken}`)
    
            // saving the accesstoken as a cookie
            res.cookie("loginToken", accessToken, {maxAge: 600000})
            console.log("cookie set.")
            res.status(200).json({accessToken})
        }else{
            res.status(400)
            throw new Error("incorrect details!")
        }
    }else{
        res.status(400)
        throw new Error("User does not exist!")
    }
    // User exists and passwords match 
})

const registerUser = expressAsync(async(req, res) => {
    const {username, email, password, balance} = req.body
    
    // Check all fields
    if(!username || !email || !password || !balance) {
        res.status(400)
        throw new Error("Enter all fields")
    }
    
    // Check if user already exists
    let possibleUser = await User.findOne({username})
    if (possibleUser) {
        res.status(400)
        throw new Error("User already exists! Please go to login.")
    }else{
        console.log("new user")
    }
    
    // Salting and encrypting
    const salt = await bcrypt.genSalt(15)
    const hashedPassword = await bcrypt.hash(password, salt)
    // Creating new user
    const user = new User({username, email, password: hashedPassword, balance})
    await user.save()
    res.status(200).json({user})
    console.log(`New user saved: ${user}`)
})

const currentUser = expressAsync(async (req, res) => {
    const userFull = await User.findById(req.decoded.id)
    res.status(200).json(userFull)
})

const allUsers = expressAsync(async(req, res) => {
    const users = await User.find()
    res.status(200).json(users)
    console.log(users)
})

const updateUser = expressAsync(async(req, res) => {
    const {userId} = req.body

    const user = await User.findByIdAndUpdate(userId, req.body)
    res.status(201).json(user)
})

const addMoney = expressAsync( async(req, res) => {
    const {amount} = req.body

    const user = await User.findById(req.decoded.id)
    user.balance = user.balance + amount

    const updatedUser = await User.findByIdAndUpdate(req.decoded.id, user)

    res.status(201).json(updatedUser)
    console.log(updatedUser)
})

module.exports = {loginUser, registerUser, currentUser, updateUser, addMoney, allUsers}