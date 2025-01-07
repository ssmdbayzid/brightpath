import * as mongoose from "mongoose";

export const connectDb = async() =>{
try {
    if (mongoose.connection.readyState >= 1) return;
    console.log("Database Connected");
    return mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

}catch(err){
    console.log("database err", err);
}
}