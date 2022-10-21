let express = require("express")
let app = express()
let path = require("path")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("./"))

app.get("/", function (r, re) {
    re.sendFile(path.resolve(__dirname, "../frontend/index.html"))
})

app.listen(5000)