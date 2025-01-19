import * as mongoose from "mongoose";

export const connectDb = async () => {
    try {
        if (mongoose.connection.readyState >= 1) return;

        const dbUrl = process.env.DB_URL;
        if (!dbUrl) {
            throw new Error("Database URL is not defined in environment variables");
        }

        await mongoose.connect(dbUrl); // Options like `useNewUrlParser` and `useUnifiedTopology` are now the default behavior.
        console.log("Database Connected");
    } catch (err) {
        console.error("Database connection error:", err);
    }
};
