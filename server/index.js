import express from "express";
import path from "path";
import homepageRouter from "./homepageRouter.js";
import assetsRouter from "./assetsRouter.js";
import UserData from "./exampleResponse/UserData.json" assert {type: 'json'};
import DocumentData from "./exampleResponse/DocumentData.json" assert {type: 'json'};
import CareerGoalData from "./exampleResponse/CareerGoalData.json" assert {type: 'json'};

const port = process.env.PORT || 3000;
const publicPath = path.join(path.resolve(), "public");
const distPath = path.join(path.resolve(), "dist");

const app = express();

app.get("/api/v1/hello", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

app.get("/api/v1/user", (_req, res) => {
  res.json(UserData);
});

app.get("/api/v1/document", (_req, res) => {
  res.json(DocumentData);
});

app.get("/api/v1/career", (_req, res) => {
  res.json(CareerGoalData);
});

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(distPath));
} else {
  app.use("/", express.static(publicPath));
  app.use("/src", assetsRouter);
}

app.use(homepageRouter);

app.listen(port, () => {
  console.log("Server listening on port", port);
});