const express = require("express")
const expressAsync = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


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
            }, process.env.PVT_KEY, {expiresIn: "60m"})
            
            // Success message
            console.log(`Login successful! \nDetails of logged in user:\n${username, password}\nAccess Token: ${accessToken}`)
    
            res.status(200).json({accessToken})
        }else{
            res.status(400)
            throw new Error(" incorrect details!")
        }
    }else{
        res.status(400)
        throw new Error("User does not exist!")
    }
    // User exists and passwords match 
})

const registerUser = expressAsync(async(req, res) => {
    const {username, email, password} = req.body
    
    // Check all fields
    if(!username || !email || !password) {
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
    const user = new User({username, email, password: hashedPassword})
    await user.save()
    res.status(200).json({Registered: user})
    console.log(`New user saved: ${user}`)
})

module.exports = {loginUser, registerUser}