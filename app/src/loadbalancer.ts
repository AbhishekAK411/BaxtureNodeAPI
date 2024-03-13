import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import router from "./routes/routes";
import connect from "./database/conn";
import cluster from "node:cluster";
import os from "os";

dotenv.config();

const totalCPUs = os.cpus().length;

if(cluster.isPrimary){
    for(let i=0;i<totalCPUs-1;i++){
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker process ${worker.process.pid} died. Restarting...`);
        cluster.fork();
    });

}else{
    const app = express();

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
        });
    })

    //* In memory MongoDB Connection
    connect().then(() => {
        try {
            const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
            app.listen(port + (cluster?.worker?.id || 0), () => {
                console.log(`Worker ${cluster.worker?.id} is running on http://localhost:${port + (cluster.worker?.id || 0)}`);
            });
        } catch (error) {
            console.log("Can't connect to database.");
        }
    }).catch((error) => {
        console.log("Invalid database connection.");
    })
}
