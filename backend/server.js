import express from "express";
const app = express();
const port = 5000;

import("../src/data/bijoux.js").then((bijouxModule) => {
  const bijoux = bijouxModule.default;

  app.get("/api/bijoux", (req, res) => {
    res.json(bijoux);
  });

  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
});
