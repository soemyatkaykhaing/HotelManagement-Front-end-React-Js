import express from "express"
import cors from "cors"
const express = require("express");
const cors = require("cors");
const port = 8080;

const app = express();

app.use(cors());

app.post("/api/login", async (req, res) => {
  console.log("login fired");
  try {
    res.status(200).json({ authenticated: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
