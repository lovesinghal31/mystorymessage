import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(
      `${process.env.MONGO_URI}/${process.env.DB_NAME}` || "",
      {}
    );
    connection.isConnected = db.connections[0].readyState;

    console.log("DB connect Successfully");
  } catch (error) {
    console.log("Database connection failed!", error);
    process.exit(1);
  }
}

export default dbConnect;
