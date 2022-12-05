import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/db.config.js";
import album from './routes/album.router.js'
import purchase from './routes/purchase.router.js'
const app = express();

dotenv.config();
connect();
app.use(express.json());

// SUAS ROTAS AQUI!!! v v v não esqueça de importá-las!
app.use('/album', album)
app.use('/purchase', purchase)

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on port: ${process.env.PORT}!`);
});
