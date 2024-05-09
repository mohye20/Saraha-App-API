import express from "express";

import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5500;
const app = express();

app.listen(port, () => {
  console.log("Server listening on port " + port);
});
