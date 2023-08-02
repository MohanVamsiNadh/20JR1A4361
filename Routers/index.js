const express = require("express");
const Routers = express.Router();

const AllTrainsData = require("../Handlers/AllTrainsData");
const SpecificTrainData = require("../Handlers/SpecificTrainData")
Routers.get("/trains", AllTrainsData);
Routers.get("/trains/:id",SpecificTrainData);

module.exports = Routers;
