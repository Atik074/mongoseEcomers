import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { ProductRoutes } from "./products/product/product.route";

//parser
app.use(express.json());
app.use(cors());

app.use("/api/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Ecommers server is running");
});

export default app;
