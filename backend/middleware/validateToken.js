const jwt = require("jsonwebtoken")
const expressAsync = require("express-async-handler")

const validate = expressAsync( async(req, res, next) => {
    console.log("All cookies", req.cookies)
    const accessToken = req.cookies.loginToken

    console.log("Accss token retrieved from cookies: ", accessToken)
    // const headers = req.headers["authorization"]
    if (accessToken) {        
        jwt.verify(accessToken, process.env.PVT_KEY, (err, decoded) => {
    
            if (err){
                console.log("Error: token not verified.", err)
            }else{
                req.decoded = decoded.data
                console.log(`Token recieved: ${accessToken}`)
                console.log(`DATA recieved from token: ${decoded.data}`)
                next()
            }
        })
    }else{
        console.log("Login first!")
        res.status(400)
        res.json({Error: "Login First"})
    }  
})

module.exports = validate