import Game from "../models/Game.js";


// Create
export const createGame = async (request, response) => {
    try{
        const{userID, buildID, isRecGame, isWin, points, assists, steals, rebounds, blocks, turnovers, fouls} = request.body;
        const newGame = new Game({
            userID,
            buildID,
            isRecGame,
            isWin, 
            points,
            assists, 
            steals,
            rebounds,
            blocks,
            turnovers,
            fouls
        });
        await newGame.save();
        const game = Game.find();
        response.status(201).json(game);
    } catch(err){
        response.status(409).json({message: err.message})
    }
};
// Read
export const getGamesByUser = async (request, response) => {
    try {
        const { userId } = request.params;
        const game = await Game.find({ userId });
        response.status(200).json(game);
    } catch (err) {
        response.status(404).json({ message: err.message });
    }
};
export const getGamesByBuild = async (req, res) => {
    try{
        const {buildID} = request.params;
        const games = Game.find({buildID});
        response.status(200).json(games);
    } catch (err){
        response.status(404).json({message: err.message})
    }
};
