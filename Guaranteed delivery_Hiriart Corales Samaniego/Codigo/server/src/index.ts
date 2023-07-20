import express, { Request, Response } from "express";

import router from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded());

// Root URL is /server
app.use("/server", router);

// If route not found
app.use((req: Request, res: Response) => {
  return res.sendStatus(404);
});

app.listen(port, async () => {
  console.log(`Running on: http://localhost:${port}`);
});
