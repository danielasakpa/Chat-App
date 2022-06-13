import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import connectDB from "./config/db.js";
import userRouter from "./route/userRoute.js";
import groupRouter from "./route/groupRoute.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { storeChat } from "./controllers/chatController.js";

const app = express();

app.use(cors());

const server = http.createServer(app);

dotenv.config();

connectDB();

const PORT = process.env.PORT || 8000;

// handles post requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/user", userRouter);
app.use("/api/groupchat", groupRouter);

app.use(errorHandler);

const io = new Server(server, {
  cors: {
    origin: "https://chat-app-afxgo.run-us-west2.goorm.io",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User Joind Room: ${data}`);
  });

  socket.on("send_message", (data) => {
    io.to(data.roomJoined).emit("receive_message", data);
    storeChat(data);
    console.log(data.roomJoined);
  });
});

server.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
