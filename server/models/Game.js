import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
    buildId: {
        type: String,
        required: true,
    },
    isRecGame: {type: Boolean},
    win: {type:Boolean},
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