import Navbar from "scenes/navbar";
import { Box, Button, useMediaQuery, useTheme, Typography} from '@mui/material';
import { useSelector } from "react-redux";
import GameStatsWidget from "scenes/widgets/gameStatsWidget";
import BuildsWidget from "scenes/widgets/buildsWidget";
import { useState } from "react";
import BuildForm from "scenes/widgets/newBuildWidget";

const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px");
    const {gamertag, _id}= useSelector((state)=>state.user);
    const { palette } = useTheme();
    const [isBuildForm, setIsBuildForm] = useState(false);
    return(
    <Box>
        <Navbar />
            <Typography
                color={palette.neutral.dark}
                variant="h1"
                fontWeight="500"
                sx={{mb:"1rem", mt:"2rem", textAlign:'center'}}
            >
                Welcome, {gamertag}! 
            </Typography>
            <Typography
                color={palette.neutral.dark}
                variant="h4"
                fontWeight="500"
                sx={{mb:"1rem", textAlign:'center'}}
            >
                Checkout your averages across all your builds! 
            </Typography>
        <Box
            width='100%'
            padding='2rem 6%'
            display={isNonMobileScreens? "flex":"block"}
            gap="0.5rem"
            justifyContent="space-between"
        >
            <Box
                flexBasis={isNonMobileScreens ? "40%": undefined}
                mt={isNonMobileScreens ? undefined : "2rem"}
            >
                <GameStatsWidget id={_id} isBuild={false} />
                
            </Box>
            <Box
                flexBasis={isNonMobileScreens ? "30%": undefined}
                mt={isNonMobileScreens ? undefined : "2rem"}
            >
                <BuildsWidget gamertag={gamertag}/>
                <Button
                    fullWidth
                    onClick={
                        function toggleForm (){
                            if(isBuildForm===false){
                                setIsBuildForm(true);
                            } else {
                                setIsBuildForm(false);
                            }
                        }
                    }
                    sx={{
                    m: "2rem 0",
                    p: "1rem",
                    backgroundColor: palette.primary.main,
                    color: palette.background.alt,
                    "&:hover": { color: palette.primary.main },
                    }}
                >
                    {isBuildForm ? "Hide Build Form" : "Add New Build"}
                </Button>
                {isBuildForm && (
                    <BuildForm />
                )}
            </Box>
        </Box>
    </Box>
    )
}
export default HomePage;
