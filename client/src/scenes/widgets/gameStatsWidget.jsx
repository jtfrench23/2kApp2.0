import {useState, useEffect} from 'react';
import Averages from 'functions/games';
import { 
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
import { useSelector } from "react-redux";


const GameStatsWidget = ({id, isBuild}) => {
    console.log(id);
    console.log(isBuild);
    const {palette}= useTheme();
    const token = useSelector((state)=>state.token);;
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
    const [ppwp, setPpwp] = useState(0);
    const [apwp, setApwp]=useState(0);
    const [rpwp, setRpwp]=useState(0);
    const [spwp, setSpwp]=useState(0);
    const [bpwp, setBpwp]=useState(0);
    const [tpwp, setTpwp]= useState(0);
    const [fpwp, setFpwp]=useState(0);
    const [pplp, setPplp] = useState(0);
    const [aplp, setAplp]=useState(0);
    const [rplp, setRplp]=useState(0);
    const [splp, setSplp]=useState(0);
    const [bplp, setBplp]=useState(0);
    const [tplp, setTplp]= useState(0);
    const [fplp, setFplp]=useState(0);
    
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
        setPpwp(averages.pwp);
        setApwp(averages.awp);
        setRpwp(averages.rwp);
        setSpwp(averages.swp);
        setBpwp(averages.bwp);
        setTpwp(averages.twp);
        setFpwp(averages.fwp);
        setPplp(averages.plp);
        setAplp(averages.alp);
        setRplp(averages.rlp);
        setSplp(averages.slp);
        setBplp(averages.blp);
        setTplp(averages.tlp);
        setFplp(averages.flp);
        return ('done');
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
            setAverages(data);
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
            setAverages(data);
        }
    };

    useEffect(()=> {
        getGames();
    }, []);

    return (
        <WidgetWrapper>
            <Typography
                color={palette.neutral.dark}
                variant="h2"
                fontWeight="500"
                sx={{mb:"1rem", textAlign:'center'}}
            >
                Rec Games
            </Typography>
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
                sx={{mt:"1.5rem", mb:"1.5rem"}}
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
            <hr></hr>
            <Typography
                color={palette.neutral.dark}
                variant="h2"
                fontWeight="500"
                sx={{mb:"1rem", mt:"1.5rem", textAlign:'center'}}
            >
                Park Games
            </Typography>
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
                            <TableCell align="center">{ppwp}</TableCell>
                            <TableCell align="center">{apwp}</TableCell>
                            <TableCell align="center">{spwp}</TableCell>
                            <TableCell align="center">{rpwp}</TableCell>
                            <TableCell align="center">{bpwp}</TableCell>
                            <TableCell align="center">{tpwp}</TableCell>
                            <TableCell align="center">{fpwp}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <hr></hr>
            <Typography
                color={palette.primary.dark}
                variant="h3"
                fontWeight="500"
                sx={{mt:"1.5rem", mb:"1.5rem"}}
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
                            <TableCell align="center">{pplp}</TableCell>
                            <TableCell align="center">{aplp}</TableCell>
                            <TableCell align="center">{splp}</TableCell>
                            <TableCell align="center">{rplp}</TableCell>
                            <TableCell align="center">{bplp}</TableCell>
                            <TableCell align="center">{tplp}</TableCell>
                            <TableCell align="center">{fplp}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <hr></hr>
            </TableContainer>
        </WidgetWrapper>
    )


}

export default GameStatsWidget;