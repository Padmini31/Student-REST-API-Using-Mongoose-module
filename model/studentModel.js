let mongoose = require("mongoose");
mongoose.pluralize(null);
let StudentSchema = mongoose.Schema({
    _id:Number,

    first_name:{
    type:String,
    required:[true,"First Name is required"]
},

last_name:{
    type:String,
    required:false
},


age:{
    type:Number,
    required:[true,"age is required"],
    min:6,
    max:18
},

class:{
    type:Number,
    required:[true,"class is required"]
},

grade:{
    type:String,
    required:[true,"grade is required"],
},
address:{
    type:String,
    required:[true,"address is required"],
}

})

let studentModel = mongoose.model("Student", StudentSchema);

    module.exports = studentModel;