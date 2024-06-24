import express from "express";
import puppeteer from "puppeteer";
import { maxamedIsmaaciiljson } from "../json/maxamed-ismaaciil.js";
import maxamedIsmaaciil from "../feath/maxamed-ismaaciil.js";

const route = express.Router();

route.get("/maxamed-ismaaciil", async (req, res) => {
  // data json
  const data = maxamedIsmaaciiljson;

  // data puppeteer
  // const data = await maxamedIsmaaciil();

  res.json(data);
});

export default route;
