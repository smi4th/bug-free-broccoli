import express from "express";
import { initHandlers } from "./handlers/handler";
import { AppDataSource } from "./db/database";

const app = async () => {
  const app = express();
  const port = 3000;
  app.use(express.json());
  initHandlers(app);

  try {
    await AppDataSource.initialize();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }

  app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
  })
}

app();
