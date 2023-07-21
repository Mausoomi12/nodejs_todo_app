// import express from "express";
// import userRouter from "./routes/user.js"
// import taskRouter from "./routes/task.js";
// import {config} from  "dotenv"
// import cookieParser from "cookie-parser";
// import { errorMiddleWare } from "./middlewares/error.js";
// import cors from "cors"


// export const app = express();

// config({
//   path: "./data/config.env"
// })


// // app.use(cors({
// //   origin:[process.env.FRONTEND_URL],
// //   methods :["GET","PUT","POST","DELETE"],
// //   credentials:true
// // }));
// const frontendURL = process.env.FRONTEND_URL;

// //Using Middlewares
// app.use(cors({
//   origin: function (origin, callback) {
//     if (origin === frontendURL) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true // Enable sending cookies in the request (if needed)
// }));
// app.use(express.json());
// app.use (cookieParser());

// //Using Routes
// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/task", taskRouter);

// app.get("/", (req, res) => {
//   res.send("Nice working");
// });

// //Using Error Middleware
// app.use(errorMiddleWare)
import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
});

// Using Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Nice working");
});

// Using Error Middleware
app.use(errorMiddleware);