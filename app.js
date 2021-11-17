const express = require("express");
const UserData = require("./user")

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to my HomePage")
})
app.get("/user", (req, res) => {
    res.send(UserData)
})


app.listen(2020, function() {
    console.log("Listening on port 2020")
})
