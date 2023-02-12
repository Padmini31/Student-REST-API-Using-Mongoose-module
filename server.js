let express = require("express");
let dbConnect = require("./config/dbConfig");
let studentRouter = require("./router/studentRouter");

let app = express();
app.use(express.json());
dbConnect.dbConnection;

app.use("/api/students",studentRouter);


app.listen(3000,()=>console.log("Server running on port number 3000"));