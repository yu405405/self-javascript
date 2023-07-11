import express from "express"

const app = express()
const port = 3000

app.set("view enjine", "ejs")

app.use(express.static("public"))

app.get('/', (req, res) => {
    const countdown = req.query.countdown
    // console.log("req.query.countdown")
    
    if(countdown) {
        res.render("index.ejs", { countdown: countdown });
    } else {
        res.send("countdownパラメータを設定してください")
    }
})

app.listen(port, () => {
    console.log(`listening at http:/localhost:${port}?countdown=5`)
})