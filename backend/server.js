import app from "./app.js";
import { dbConnection } from "./config/dbConnection.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

dbConnection(); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});
