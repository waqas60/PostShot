import "dotenv/config";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  if (process.env.NODE_ENV == "development") {
    console.log("server running on http://localhost:3000");
    return;
  }
  console.log("server running sucessfully");
});
