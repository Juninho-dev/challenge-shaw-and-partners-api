import "express-async-errors";
import cors from "cors";
import express from "express";

import { errorMiddleware } from "./middleware/errorMiddleware";
import UsersRoutes from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use(UsersRoutes);

app.use(errorMiddleware);

export { app };
