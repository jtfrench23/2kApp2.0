import Game from "../models/game";
import User from "../models/User.js";

// Create
export const createGame = async (request, response) => {
    try{
        const{win, points, assists, steals, rebounds, blocks, turnovers, fouls} = request.body;
        const user = await User.findById(userID);
        const newGame = new Game({
            userID,
            win, 
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
export const getGames = async (request, response) => {
    try {
        const { userId } = request.params;
        const game = await Game.find({ userId });
        response.status(200).json(game);
    } catch (err) {
        response.status(404).json({ message: err.message });
    }
};
