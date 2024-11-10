import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors"
import helmet from "helmet";
import morgan from "morgan";
/* ROUTE IMPORTS */
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/products", productRoutes); // http://localhost:8000/products
app.use("/users", userRoutes); // http://localhost:8000/users

/* SERVER */
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
