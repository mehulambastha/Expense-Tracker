const jwt = require("jsonwebtoken")
const expressAsync = require("express-async-handler")

const validate = expressAsync( async(req, res, next) => {
    const token = req.headers["authorization"].split(" ")[1]

    if(jwt.verify(token, process.env.PVT_KEY, (err, decoded) => {

        req.decoded = decoded.data
        console.log(`Token recieved: ${token}`)
        console.log(`DATA recieved from token: ${decoded.data}`)
        res.json(decoded)
        next()
    })){
    }
})

module.exports = validate