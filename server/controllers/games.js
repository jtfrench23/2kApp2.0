import Game from "../models/Game.js";

// Create
export const createGame = async (request, response) => {
    try{
        console.log('here');
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
        response.status(201).json({message:'success'});
    } catch(err){
        response.status(409).json({message: err.message})
    }
};
// Read
export const getGamesByUser = async (request, response) => {
    try {
        const { userID } = request.params;
        console.log(userID);
        const game = await Game.find({ userID });
        console.log(game);
        response.status(200).json(game);
    } catch (err) {
        response.status(404).json({ message: err.message });
    }
};
export const getGamesByBuild = async (req, res) => {
    try{
        const {buildID} = req.params;
        const games = await Game.find({buildID});
        res.status(200).json(games);
    } catch (err){
        res.status(405).json({message: err.message})
    }
};
