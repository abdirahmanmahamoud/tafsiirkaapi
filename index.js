import express from "express";
import maxamedIsmaaciil from "./routes/maxamed-ismaaciil.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/images", express.static(__dirname + "/images"));
app.use(maxamedIsmaaciil);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
