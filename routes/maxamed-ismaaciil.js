import express from "express";
import puppeteer from "puppeteer";

const route = express.Router();

route.get("/maxamed-ismaaciil", async (req, res) => {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });

  const page = await browser.newPage();
  await page.goto(
    "https://ia801804.us.archive.org/3/items/tafsiirka-quraanka-sh.-maxamed-ismaaciil/",
    {
      waitUntil: "networkidle2",
    }
  );

  const audios = await page.evaluate(() => {
    const audioElements = Array.from(document.querySelectorAll("pre a"));
    return audioElements
      .filter((el) => el.href.endsWith(".mp3"))
      .map((el) => ({
        title: el.textContent.trim(),
        url: el.href,
      }));
  });

  await browser.close();

  // order by title Casharka 091aad number 1
  audios.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  // Split the title by "Sh.Maxamed Ismaaciil"
  audios.map((audio) => {
    let splitTitle = audio.title.split("Sh.");
    audio.title = splitTitle[0];
    return audio;
  });

  const objects = {
    name: "Sh.maxamed ismaaciil",
    image:
      "https://tafsiirkaapi.abdirahmandev.com/images/Sh.Maxamed%20Ismaaciil.png",
    audios: audios,
  };

  res.json(objects);
});

export default route;
