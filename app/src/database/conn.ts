import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

const connect = async() => {
    const mongoServer = await MongoMemoryServer.create();
    const mongoURI = mongoServer.getUri();

    await mongoose.connect(mongoURI, { dbName: "baxtureDB" });
    console.log(`Successfully connected to ${mongoURI}`);
}

export default connect;