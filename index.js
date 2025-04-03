import express from "express";
const app = express();
import http from "http";
import { Server } from "socket.io";
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  },
});

import cors from "cors";
import bp from "body-parser";

import connectDB from "./config/db.js";
import dotenv from "dotenv";

import authenticationRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import firebaseRoutes from "./routes/firebaseRoutes.js";
import categoriesRoutes from "./routes/categoriesRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import passwordRoutes from "./routes/passwordRoutes.js";
import deviceRoutes from "./routes/deviceRoutes.js";

import jwt from "jsonwebtoken";
import { errorHandler } from "./middleware/errorHandler.js";

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
// app.use(cors());
// app.use(
//   cors({
//     origin:
//       process.env.NODE_ENV === "production"
//         ? process.env.ALLOWED_ORIGINS.split(",")
//         : "http://localhost:3000",
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
app.use(express.json({ limit: "10mb" }));
app.use(bp.json());
dotenv.config();

connectDB();

app.use("/api/v1", authenticationRoutes);
app.use("/api/v1", productRoutes);
app.use("/api/v1", firebaseRoutes);
app.use("/api/v1", categoriesRoutes);
app.use("/api/v1", notesRoutes);
app.use("/api/v1", profileRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", passwordRoutes);
app.use("/api/v1", deviceRoutes);

let userSockets = {};

io.on("connection", (socket) => {
  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected`);
  });

  socket.on("userInfo", ({ userId }) => {
    const decoded = jwt.verify(userId, process.env.JWT_SECRET);
    if (!decoded) return res.status(401).send({ message: "Invalid token" });
    const user = decoded._id;
    if (!userSockets[user]) {
      userSockets[user] = [];
    }
    userSockets[user].push(socket.id);
  });

  socket.on("sendMessageToList", ({ userId, message, noteId }) => {
    const decoded = jwt.verify(userId, process.env.JWT_SECRET);
    if (!decoded) return res.status(401).send({ message: "Invalid token" });
    userId = decoded._id;
    if (message.title === "" || message.description === "") return;
    if (userSockets[userId]) {
      userSockets[userId].forEach((socketId) => {
        if (socketId !== socket.id) {
          io.to(socketId).emit("receiveMessage", { message, noteId });
        }
      });
    }
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
    // Clean up the `userSockets` map
    for (const userId in userSockets) {
      userSockets[userId] = userSockets[userId].filter(
        (id) => id !== socket.id
      );
      if (userSockets[userId].length === 0) {
        delete userSockets[userId];
      }
    }
  });

  socket.emit("onConnect", { id: socket.id });
});

// Add error handler after all routes
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
