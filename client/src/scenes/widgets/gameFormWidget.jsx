import React, { useState } from 'react'
import axios from 'axios';
import {
    Paper,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    InputLabel,
    OutlinedInput,
    Button
} from '@mui/material';
import WidgetWraper from 'components/WidgetWrapper';
import { useSelector } from 'react-redux';
const GameForm = () => {
    //keep track of what is being typed via useState hook
    const {_id} = useSelector((state)=>state.user);
    const {buildID} = useSelector((state)=>state.build);
    const [isWin, setIsWin] = useState(true);
    const [isRecGame, setIsRecGame] = useState(true);
    const [points, setPoints] = useState(0);
    const [rebounds, setRebounds] = useState(0);
    const [assists, setAssists] =  useState(0);
    const [steals, setSteals] = useState(0);
    const [blocks, setBlocks] = useState(0);
    const [turnovers, setTurnovers] = useState(0);
    const [fouls, setFouls] = useState(0);
    const token = useSelector((state)=>state.token);
    console.log(token);

    //handler when the form is submitted
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log('adding game');
        const gameData = {
            userID:_id,
            buildID:buildID,
            isWin:isWin,
            isRecGame:isRecGame,
            points:points,
            assists:assists,
            steals:steals,
            blocks:blocks,
            rebounds:rebounds,
            turnovers:turnovers,
            fouls:fouls
        }
        const response = await fetch(
            `http://localhost:3001/games/create_game`,
            {
            method: "POST",
            headers: { 
                Authorization: `Bearer ${token}`,
                Accept: 'application.json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(gameData)
            }
        );
        const data = await response.json();
        console.log(data);
    };
    const styles = {
    paper: {
        width: "70%", padding: "1rem", display:"flex", flexDirection:"column", textAlign:"center", margin:"1px auto"
    },
    input: {
        margin: "1rem"
    },
    button: {
        width: "100%",
        display:"block"
    },
    RadioGroup: {
        width: "100%",
        marginBottom: "1rem"
    }
}
    return (
        <WidgetWraper>
            <Paper elevation={3} style={styles.paper}>
                <form onSubmit={onSubmitHandler}>
                    <h2>Add Game Stats</h2>
                    <FormControl variant="outlined" style={styles.input}>
                        <FormLabel id="winSelect">Win/Loss</FormLabel>
                        <RadioGroup
                            defaultValue = {true}
                            name="radio-buttons-group"
                            onChange = {(e)=>setIsWin(e.target.value)}
                        >
                            <FormControlLabel value={true} control={<Radio />} label="Win" />
                            <FormControlLabel value={false} control={<Radio />} label="Loss" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <FormLabel id="winSelect">Game Type</FormLabel>
                        <RadioGroup
                            defaultValue = {true}
                            name="radio-buttons-group"
                            onChange = {(e)=>setIsRecGame(e.target.value)}
                        >
                            <FormControlLabel value={true} control={<Radio />} label="Rec" />
                            <FormControlLabel value={false} control={<Radio />} label="Park" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Points</InputLabel>
                        <OutlinedInput type="text" onChange = {(e)=>setPoints(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Assists</InputLabel>
                        <OutlinedInput type="text" onChange = {(e)=>setAssists(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Steals</InputLabel>
                        <OutlinedInput type="text" onChange = {(e)=>setSteals(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Rebounds</InputLabel>
                        <OutlinedInput type="text" onChange = {(e)=>setRebounds(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Blocks</InputLabel>
                        <OutlinedInput type="text" onChange = {(e)=>setBlocks(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Turnovers</InputLabel>
                        <OutlinedInput type="text" onChange = {(e)=>setTurnovers(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Fouls</InputLabel>
                        <OutlinedInput type="text" onChange = {(e)=>setFouls(e.target.value)}/>
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </form>
            </Paper>
        </WidgetWraper>
    )
}
export default GameForm;
