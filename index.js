const { parse } = require("url");
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

async function main() {
  try {
    server
      .get("/", (req, res) => {
        res.send("Hello World!");
      })
      .get("/about", (req, res) => {
        const { query } = parse(req.url, true);
        app.render(req, res, "/about", query);
      })
      .get("/api/greet", (req, res) => {
        res.json({ name: req.query?.name ?? "unknown" });
      })
      .listen(3000, () => console.log("server ready"));
  } catch (err) {
    console.log(err.stack);
  }
}

main();
