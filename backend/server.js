const express = require("express")
const dotenv = require("dotenv")
const connection = require("./database/dbCnx")

const app  = express()
app.use(express.json())
dotenv.config()
connection()

const port = process.env.PORT || 5002

app.use("/users/", require("./routes/expenses/expenseRoutes"))
app.use("/", require("./routes/users/userRoutes"))

app.listen(port, ()=>{
    console.log("Listening on port: ", port)
})