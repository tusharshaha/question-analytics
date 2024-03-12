import mongoose from "mongoose";

const dbConnect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("database connected successfully."))
    .catch((err) => console.log("database connection failed!"));
};

export default dbConnect;