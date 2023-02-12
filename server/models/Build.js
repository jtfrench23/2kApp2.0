import mongoose from "mongoose";

const BuildSchema = new mongoose.Schema({
    gamertag: { type: String},
    buildName: {type: String},
    position: {type: String},
    buildNickname: {type: String},
}, { timestamps: true });

const Build = mongoose.model("Build", BuildSchema);
export default Build;