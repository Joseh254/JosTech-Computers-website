import express, { response } from "express";
import producsRouter from "./Routes/Products.route.js";
import users from "./Routes/usersroute.js";
import cart from "./Routes/cartRoute.js";
import Subscribe from "./Routes/NewsLetterSubScribersRouter.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import messages from "./Routes/user_messagesRoute.js";
import { config } from "dotenv";

config();
const app = express();
app.use(cookieParser());
app.use(
  express.json({
    reviver: (key, value) =>
      typeof value === "bigint" ? value.toString() : value,
    // Custom JSON replacer that converts BigInt values to strings
    replacer: (key, value) =>
      typeof value === "bigint" ? value.toString() : value,
  }),
);

app.use(
  cors({
    origin: ["http://localhost:5173", "https://jostech-f26ad.web.app/"], // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
  }),
);
app.use(express.urlencoded({ extended: true }));
app.get("/", (request, response) => {
  response.send("<h1>Jostech computers..</h1>");
});
app.use("/api/products", producsRouter);
app.use("/api/users", users);
app.use("/api/users", messages);
app.use("/api/cart", cart),
app.use("/api/Newsletter",Subscribe)
  app.listen(3000, () => {
    console.log("server running");
  });
