import Navbar from "scenes/navbar";
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useSelector } from "react-redux";
import GameStatsWidget from "scenes/widgets/gameStatsWidget";
import GameForm from "scenes/widgets/gameFormWidget";
import { useParams } from "react-router-dom";

const BuildPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px");
    const {buildID}= useSelector((state)=>state.build) ;
    const {buildNickname, buildName, position} = useSelector((state)=>state.build);
    const {palette}= useTheme();
    return(
    <Box>
        <Navbar />
        <Typography
        color={palette.primary.main}
        variant="h3"
        fontWeight="500"
        textAlign='center'
        sx={{mt:"1.5rem",}}
        >
                {buildNickname} {position}
            </Typography>
        <Box
            width='100%'
            padding='2rem 6%'
            display={isNonMobileScreens? "flex":"block"}
            gap="0.5rem"
            justifyContent="space-between"
        >
            <Box
                flexBasis={isNonMobileScreens ? "42%": undefined}
                mt={isNonMobileScreens ? undefined : "2rem"}
            >
                <GameStatsWidget id={buildID} isBuild={true}/>
                
            </Box>
            <Box
                flexBasis={isNonMobileScreens ? "50%": undefined}
                mt={isNonMobileScreens ? undefined : "2rem"}
            >
                <GameForm />
                
            </Box>
        </Box>
    </Box>
    )
}
export default BuildPage;