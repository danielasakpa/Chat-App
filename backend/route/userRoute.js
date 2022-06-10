import express from "express"
import {registerUser, loginUser, getUser, updateUser} from "../controllers/userController.js"
import {protect} from "../middleware/authMiddleware.js"


const router = express.Router()

router.post("/", registerUser)

router.post("/login", loginUser)

router.put("/:id", updateUser)

router.get("/me", protect, getUser)

export default router;