import { Router } from "express"
import {
  getAllInfo,
  getInfo,
  updateInfo,
  createInfo,
  deleteInfo,
} from "../controllers/crud.controller.js"

const router = Router()

router.get("/crud", getAllInfo)

router.get("/crud/:id", getInfo)

router.post("/crud", createInfo)

router.put("/crud/:id", updateInfo)

router.delete("/crud/:id", deleteInfo)

export default router
