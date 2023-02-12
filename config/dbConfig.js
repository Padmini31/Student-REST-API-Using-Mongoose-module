let mongoose = require("mongoose");
mongoose.set("strictQuery",true);
let url = "mongodb://127.0.0.1:27017/mydb";

dbConnection = mongoose.connect(url).then(res=>console.log("Db Connecetd")).catch(err=>console.log("error gebnerated "+err)); 

module.exports = dbConnection;