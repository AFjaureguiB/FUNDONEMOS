import express from "express"
import morgan from "morgan"

const app = express()
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false })) // Remove flase in case of using large forms.

app.get("/", (req, res) => res.json({ message: "welcome to my restAPI" }))

app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  })
})

export default app
