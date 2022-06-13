import express from "express"
import {getChat}  from "../controllers/chatController.js"
import {protect} from "../middleware/authMiddleware.js"


const router = express.Router()

router.get("/", getChat)

export default router;