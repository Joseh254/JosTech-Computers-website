import express from "express";
import producsRouter from "./Routes/Products.route.js";
import users from "./Routes/usersroute.js";
import cors from "cors";
import messages from "./Routes/user_messagesRoute.js"
import { config } from "dotenv";

config();
const app = express();
app.use(express.json({
  reviver: (key, value) => typeof value === 'bigint' ? value.toString() : value,
  // Custom JSON replacer that converts BigInt values to strings
  replacer: (key, value) => typeof value === 'bigint' ? value.toString() : value
}));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", producsRouter);
app.use("/api/users", users);
app.use("/api/users", messages);

app.listen(3000, () => {
  console.log("server running");
});
