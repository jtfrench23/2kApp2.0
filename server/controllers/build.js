import Build from "../models/Build.js";


// Create
export const createBuild = async (request, response) => {
    try{
        const{gamertag, buildName, position, buildNickname} = request.body;
        const newBuild = new Build({
            gamertag,
            buildName,
            position,
            buildNickname
        });
        await newBuild.save();
        const build = Build.find();
        response.status(201).json(build);
    } catch(err){
        response.status(409).json({message: err.message})
    }
};
/* READ */
export const getBuild = async (req, res) => {
    try {
        const { id } = req.params;
        const build = await Build.findById(id);
        res.status(200).json(build);
        } catch (err) {
        res.status(404).json({ message: err.message });
        }
};