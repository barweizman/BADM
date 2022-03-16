const express = require("express");
const path = require("path");

const app = express();

const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", req => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(port, err => {
  if (err) console.log("ERROR!", err);
  console.log(`Listening on port ${port}`);
});
