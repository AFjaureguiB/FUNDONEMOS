import { Router } from "express"

const router = Router()

router.get("/crud", (req, res) => res.send("Getting Info"))

router.get("/crud/:id", (req, res) => res.send("Getting unique Info"))

router.post("/crud", (req, res) => res.send("Creating Info"))

router.put("/crud/:id", (req, res) => res.send("Updating unique Info"))

router.delete("/crud/:id", (req, res) => res.send("Deleting Info"))

export default router
