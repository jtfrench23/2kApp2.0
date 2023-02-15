import {useState, useEffect} from 'react';
import Averages from 'functions/games';
import { 
    Box, 
    Typography, 
    useTheme,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import { setGames } from "state";

const GameStatsWidget = ({id, isBuild}) => {
    console.log(id);
    console.log(isBuild);
    const dispatch = useDispatch();
    const {palette}= useTheme();
    const token = useSelector((state)=>state.token);
    const games = useSelector((state)=>state.games);
    const [ppw, setPpw] = useState(0);
    const [apw, setApw]=useState(0);
    const [rpw, setRpw]=useState(0);
    const [spw, setSpw]=useState(0);
    const [bpw, setBpw]=useState(0);
    const [tpw, setTpw]= useState(0);
    const [fpw, setFpw]=useState(0);
    const [ppl, setPpl] = useState(0);
    const [apl, setApl]=useState(0);
    const [rpl, setRpl]=useState(0);
    const [spl, setSpl]=useState(0);
    const [bpl, setBpl]=useState(0);
    const [tpl, setTpl]= useState(0);
    const [fpl, setFpl]=useState(0);
    
    function setAverages(data){
        const averages = Averages(data);
        setPpw(averages.pointsWin);
        setApw(averages.assistsWin);
        setRpw(averages.reboundsWin);
        setSpw(averages.stealsWin);
        setBpw(averages.blocksWin);
        setTpw(averages.turnoversWin);
        setFpw(averages.foulsWin);
        setPpl(averages.pointsLoss);
        setApl(averages.assistsLoss);
        setRpl(averages.reboundsLoss);
        setSpl(averages.stealsLoss);
        setBpl(averages.blocksLoss);
        setTpl(averages.turnoversLoss);
        setFpl(averages.foulsLoss);
    }
    const getGames = async ()=>{
        console.log('gettingGames');
        if (isBuild===true){
            const response = await fetch(
                `http://localhost:3001/games/${id}/build_games`,
                {
                    method:"GET",
                    headers:{Authorization: `Bearer ${token}`}
                }
            );
            const data = await response.json();
            console.log(`game = ${data}`);
            dispatch(setGames({games: data}));
            setAverages(games);
        } else{
            const response = await fetch(
                `http://localhost:3001/games/${id}/user_games`,
                {
                    method:"GET",
                    headers:{Authorization: `Bearer ${token}`}
                }
            );
            const data = await response.json();
            console.log(`game = ${data}`);
            dispatch(setGames({games: data}));
            setAverages(games);
        }
    };

    useEffect(()=> {
        getGames();
    }, []);

    return (
        <WidgetWrapper>
            <Typography
                color={palette.primary.dark}
                variant="h3"
                fontWeight="500"
                sx={{mb:"1.5rem"}}
            >
                Win Averages
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Points/Win</TableCell>
                            <TableCell align="center">Assists/Win</TableCell>
                            <TableCell align="center">Steals/Win</TableCell>
                            <TableCell align="center">Rebounds/Win</TableCell>
                            <TableCell align="center">Blocks/Win</TableCell>
                            <TableCell align="center">Turnovers/Win</TableCell>
                            <TableCell align="center">Fouls/Win</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{ppw}</TableCell>
                            <TableCell align="center">{apw}</TableCell>
                            <TableCell align="center">{spw}</TableCell>
                            <TableCell align="center">{rpw}</TableCell>
                            <TableCell align="center">{bpw}</TableCell>
                            <TableCell align="center">{tpw}</TableCell>
                            <TableCell align="center">{fpw}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <hr></hr>
            <Typography
                color={palette.primary.dark}
                variant="h3"
                fontWeight="500"
                sx={{mb:"1.5rem"}}
            >
                Loss Averages
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Points/Loss</TableCell>
                            <TableCell align="center">Assists/Loss</TableCell>
                            <TableCell align="center">Steals/Loss</TableCell>
                            <TableCell align="center">Rebounds/Loss</TableCell>
                            <TableCell align="center">Blocks/Loss</TableCell>
                            <TableCell align="center">Turnovers/Loss</TableCell>
                            <TableCell align="center">Fouls/Loss</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center">{ppl}</TableCell>
                            <TableCell align="center">{apl}</TableCell>
                            <TableCell align="center">{spl}</TableCell>
                            <TableCell align="center">{rpl}</TableCell>
                            <TableCell align="center">{bpl}</TableCell>
                            <TableCell align="center">{tpl}</TableCell>
                            <TableCell align="center">{fpl}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </WidgetWrapper>
    )


}

export default GameStatsWidget;