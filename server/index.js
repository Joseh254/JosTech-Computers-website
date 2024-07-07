import express from "express";
import producsRouter from "./Routes/Products.route.js";
import users from "./Routes/usersroute.js";
import cors from "cors";
import { config } from "dotenv";

config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST", "GET", "DELETE", "PATCH", "PUT"],
  }),
);
app.use(express.urlencoded({ extended: true }));

app.use("/", producsRouter);
app.use("/api/users", users);

app.listen(3000, () => {
  console.log("server running");
});
