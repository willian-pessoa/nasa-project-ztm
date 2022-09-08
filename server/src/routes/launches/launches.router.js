const express = require("express")

const {
  getHttpAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
} = require("./launches.controller")

const launchesRouter = express.Router()

launchesRouter.get("/", getHttpAllLaunches);
launchesRouter.post("/", httpAddNewLaunch);
launchesRouter.delete("/:id", httpAbortLaunch);

module.exports = launchesRouter 