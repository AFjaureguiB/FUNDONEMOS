import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"

//Routes
import crudRoutes from "./routes/crud.routes.js"
import authRoutes from "./routes/auth.routes.js"

const app = express()

//Middlewares
app.use(morgan("dev"))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false })) // Remove flase in case of using large forms.

app.get("/", (req, res) => res.json({ message: "welcome to my restAPI" }))
app.use("/api", crudRoutes)
app.use("/api", authRoutes)

//Error Handler
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  })
})

export default app
