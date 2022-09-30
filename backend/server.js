let e = require("express")
let app = e()
let path = require("path")

app.use(e.urlencoded({ extended: false }))
app.use(e.json())
app.use(e.static("./"))

app.get("/", function (r, re) {
    re.sendFile(path.resolve(__dirname, "../frontend/index.html"))
})

app.listen(5000)