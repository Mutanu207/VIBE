import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});