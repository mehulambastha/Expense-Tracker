const mongoose =  require("mongoose");


const connectToDb = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.CONN)
        console.log(`Connection established to ${connect.connection.name} located at ${connect.connection.host}`)
    } catch (error) {
        console.log("DB Connection error: ", error)
    }
}

module.exports = connectToDb