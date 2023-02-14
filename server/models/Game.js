import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    buildID:{
        type: String,
        required: true
    },
    isRecGame: {type: Boolean},
    isWin: {type:Boolean},
    points: {type: Number},
    assists: {type: Number},
    steals: {type: Number},
    rebounds: {type: Number},
    blocks: {type: Number},
    turnovers: {type: Number},
    fouls: {type: Number}
}, { timestamps: true });

const Game = mongoose.model("Game", GameSchema);
export default Game;