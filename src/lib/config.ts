import * as mongoose from "mongoose";

export const connectDb = async() =>{
try {
    if (mongoose.connection.readyState >= 1) return;
    console.log("Database Connected");
    return mongoose.connect("mongodb+srv://brightpath:vq1QeXOPbI3TuS1U@britghtpath.gfx67.mongodb.net/?retryWrites=true&w=majority&appName=BritghtPath", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

}catch(err){
    console.log("database err", err);
}
}