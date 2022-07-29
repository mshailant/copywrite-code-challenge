import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes";

const app = express();

const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
