var mongoose = require("mongoose")

var mongodb_URI = "mongodb://127.0.0.1:27017/webt01"
mongoose.connect(mongodb_URI, {useNewUrlParser: true})

var db = mongoose.connection

db.on("connected", () => {
    console.log("Connected to MongoDB at: " + mongodb_URI)
})

db.on("disconnected", () => {
    console.log("Disconnected from MongoDB at: " + mongodb_URI)
})

db.on("error", console.error.bind(console, "connection error:"))

