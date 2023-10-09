const express = require("express")
const bodyParser = require("body-parser")
const app = express()
let allData = ["vivek"]

app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

app.get("/", function (req, res) {
    let today = new Date()
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day = today.toLocaleDateString("en-US", options)
    res.render("index", { todayTime: day, newItem: allData })
})

app.post("/", function (req, res) {
    let info = req.body.newItems
    allData.push(info)
    res.redirect("/")
})


app.listen(3000, function () {
    console.log("your server was live at port number 3000")
})