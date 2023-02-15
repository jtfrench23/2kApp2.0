import React, { useState } from 'react'
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import WidgetWraper from 'components/WidgetWrapper';
import { useSelector } from 'react-redux';

const BuildForm = () => {
    //keep track of what is being typed via useState hook
    const {gamertag} = useSelector((state)=>state.user);
    const [buildName, setBuildName] = useState('');
    const [buildNickname,setBuildNickname] = useState('');
    const [position, setPosition]=useState('');
    const token = useSelector((state)=>state.token);
    const navigate = useNavigate();
    console.log(token);

    //handler when the form is submitted
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        console.log('adding build');
        const gameData = {
            gamertag:gamertag,
            buildName: buildName,
            buildNickname: buildNickname,
            position: position
        }
        const response = await fetch(
            `http://localhost:3001/builds/create_build`,
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
        navigate(`/home`);
        navigate(0);
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
        margin:'1px',
        display:"block"
    },
}
    return (
        <WidgetWraper>
            <Paper elevation={3} style={styles.paper}>
                <form onSubmit={onSubmitHandler}>
                    <h2>Enter Build Details Below</h2>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Build Name</InputLabel>
                        <OutlinedInput type="text" onChange = {(e)=>setBuildName(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Build Nickname</InputLabel>
                        <OutlinedInput type="text" onChange = {(e)=>setBuildNickname(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Position</InputLabel>
                        <OutlinedInput type="text" onChange = {(e)=>setPosition(e.target.value)}/>
                    </FormControl>
                    <FormControl variant="outlined" style={styles.button}>
                        <Button type="submit" variant="contained" color="primary">
                            Submit
                        </Button>
                    </FormControl>
                </form>
            </Paper>
        </WidgetWraper>
    )
}
export default BuildForm;