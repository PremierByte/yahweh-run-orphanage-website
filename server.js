const express = require("express");
const next = require("next");

const port = process.env.PORT || 3000;
const dev = false; // production
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(`> Next.js is running on port ${port}`);
  });
});
