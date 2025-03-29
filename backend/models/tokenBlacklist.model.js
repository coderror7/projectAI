import mongoose from "mongoose";

const tokenBlacklistSchema = new mongoose.Schema({
    token: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now, expires: 86400 }  // Expires in 24 hours (86400 seconds)
});

const TokenBlacklist = mongoose.model("TokenBlacklist", tokenBlacklistSchema);

export default TokenBlacklist;
