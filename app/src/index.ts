import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes/routes";
import connect from "./database/conn";

const app = express();

dotenv.config();
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api", router);
app.use((req: Request, res: Response) => {
    return res.status(404).json({
        status: 404,
        success: false,
        message: "Could not locate resource. Please try again later."
    })
})

connect().then(() => {
    try {
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`Listening on port ${port}`));
    } catch (error) {
        console.log("Can't connect to database.");
    }
}).catch((error) => {
    console.log("Invalid database connection.");
})