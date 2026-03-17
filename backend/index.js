import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./database.js";

dotenv.config();

await connectDB();
app.listen(process.env.PORT || 5000);
console.log("Server is running at", process.env.PORT);