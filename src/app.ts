import express, { NextFunction, Request, Response } from "express";
const app = express();

//Security packages
import cors from "cors";

//For Routers Import
import userRouter from "./routes/userRoutes";

//For Error Import
import AppError from "./utils/AppError";
import globalErrorHandler from "./controllers/errorController";
import productRouter from "./routes/productRoutes";

// Parse Body
app.use(express.json({ limit: "10kb" }));

//Test Middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("hello from middleware");
  next();
});

//Routes
const prefix = "/api/v1";

app.use(`${prefix}/users`, userRouter);
app.use(`${prefix}/products`, productRouter);

//If app not found any api route
app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});

//handling global error
app.use(globalErrorHandler);

export default app;
