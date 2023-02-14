import Navbar from "scenes/navbar";
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from "react-redux";
import GameStatsWidget from "scenes/widgets/gameStatsWidget";

const BuildPage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px");
    const {_id}= useSelector((state)=>state.user);
    return(
    <Box>
        <Navbar />
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
                <GameStatsWidget id={{_id, isBuild:true}} />
            </Box>
        </Box>
    </Box>
    )
}
export default BuildPage;