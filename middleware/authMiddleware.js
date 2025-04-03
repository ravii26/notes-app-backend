import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

const isAuthentic = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(400).send({ message: "No token provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) return res.status(401).send({ message: "Invalid token" });
    if (req.method === "GET") {
      req.params.user = await User.findOne({ _id: decoded._id });
    } else {
      req.body.user = await User.findOne({ _id: decoded._id });
    }
    if (!req.body.user && !req.params.user)
      return res.status(404).send({ message: "User not found!" });
    const user = req.body.user || req.params.user;

    const device = await user.devices.find(
      (device) => device.deviceId === decoded.deviceId
    );
    if (!device) return res.status(403).send({ message: "Device not found" });
    next();
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export default isAuthentic;
