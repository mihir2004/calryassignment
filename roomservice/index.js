import express from "express";
import bodyParser from "body-parser";
import requestRoutes from "./routes/requestRoutes.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use("/requests", requestRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
