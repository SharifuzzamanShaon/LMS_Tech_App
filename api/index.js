const app = require("./app");
const bodyParser = require("body-parser");
const useRouter = require("./router/user");
const { connectDB } = require("./DB/ConnectDB");
const router = require("./router");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const authMiddleware = require("./middleware/authenticate/authMiddleware");


app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:3000',  // This should match the address of your frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,  // Enable this if you need to handle cookies
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "welcome" });
});

app.post("/token", authMiddleware, (req, res) => {
  console.log("user is", req.user);
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "views")));

app.use(express.static(path.join(__dirname, "public")));

app.get("/show", (req, res) => {
  const data = {
    name: "Json Roy",
  };
  res.send("Hii");
});

app.use("/api", useRouter);

app.use("/api/v1", router);

app.use((error, req, res, text) => {
  const message = error.message ? error.message : "Server Error Occured";
  const status = error.status ? error.status : 500;
  res.status(status).json({ success: false, message });
});

const port = 5000;
app.listen(port, async () => {
  console.log("server Running at http://localhost:5000");
  await connectDB();
  console.log("DB connected");
});
