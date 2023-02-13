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
// Read
export const getBuild = async (req, res) => {
    try {
        const { id } = req.params;
        const build = await Build.findById(id);
        res.status(200).json(build);
        } catch (err) {
        res.status(404).json({ message: err.message });
        }
};

export const getBuildsByGamertag = async (req,res) => {
    try{
        const {gamertag} = req.body;
        const builds = await Build.find(
            {gamertag: gamertag}
        );
        console.log(builds);
        res.status(200).json(builds);
    } catch(err){
        res.status(404).json({ message: err.message });
    }
}

// Update

export const editBuild = async(req, res) => {
    try{
        const {id} = req.params;
        const build = await Build.findById(id);
        const {buildName, position, buildNickname} = req.body;
        const updatedBuild = await Build.findByIdAndUpdate(
            id,
            {gamertag: build.gamertag},
            {buildName: buildName},
            {position: position},
            {buildNickname: buildNickname},
            {new: true}
        );
        res.status(200).json(updatedBuild);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
}

// Delete

export const deleteBuild = async(req, res) => {
    try{
        const {id} = req.params;
        Build.findByIdAndDelete(id);
        res.status(200).json({message:'Build deleted successfully. What has been done cannot be undone.'});
    } catch(err){
        res.status(404).json({message: err.message});
    }
}