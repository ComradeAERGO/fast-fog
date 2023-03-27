import express from "express";

const app = express();
const port = process.env.PORT || 3100;

app.get("/", (req: any, res: any) => {
  res.send("Hello, Express server!");
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
