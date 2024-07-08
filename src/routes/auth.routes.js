import { Router } from "express"

const router = Router()

router.post("/signin", (req, res) => res.send("signin"))

router.post("/signup", (req, res) => res.send("registering"))

router.post("/signout", (req, res) => res.send("close sesion"))

router.get("/profile", (req, res) => res.send("user profile"))

export default router
