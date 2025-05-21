require("dotenv").config();
const express = require("express");
const connectDB=require("./config/database");
const config = require("./config/config")
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const createHttpError = require("http-errors");
const cookieParser = require("cookie-parser");
const app = express();

const PORT = config.port;
connectDB();

// Middleware
app.use(express.json()); // needed to parse req.body
app.use(cookieParser());

app.get("/",(req,res) =>{
    res.json({message: "Hello from POS Server!"});
})

//end points
app.use("/api/user",require("./routes/userRoute"));
app.use("/api/order", require("./routes/orderRoute"));

// Global Error Handler
app.use(globalErrorHandler);

app.listen(PORT,()=>{
    console.log(`POS server is listening on port ${PORT}`);
})
