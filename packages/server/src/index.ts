import express from "express";
import login from "./api/login";

const app = express();
const port = process.env.PORT || 3100;

app.get("/", (req: any, res: any) => {
  res.send("Hello, Express server!");
});

app.post("/api/login", login);

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
