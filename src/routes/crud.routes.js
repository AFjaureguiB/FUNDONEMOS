import Router from "express-promise-router"
import {
  getAllInfo,
  getInfo,
  updateInfo,
  createInfo,
  deleteInfo,
} from "../controllers/crud.controller.js"
import { isAuth } from "../middlewares/auth.middleware.js"

const router = Router()

router.get("/crud", isAuth, getAllInfo)

router.get("/crud/:id", isAuth, getInfo)

router.post("/crud", isAuth, createInfo)

router.put("/crud/:id", isAuth, updateInfo)

router.delete("/crud/:id", isAuth, deleteInfo)

export default router
