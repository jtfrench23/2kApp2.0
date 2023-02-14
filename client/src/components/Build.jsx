import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import { setBuild } from "state";
import { useDispatch } from "react-redux";


const Build = ({ buildId, buildName, buildNickname, position }) => {
    const navigate = useNavigate();
    const { palette } = useTheme();
    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    const dispatch = useDispatch();
    

    return (
    <FlexBetween>
        <FlexBetween gap="1rem">
        <Box
            onClick={() => {
                dispatch(
                    setBuild({buildName:buildName, buildNickname:buildNickname, position:position})
                );
                navigate(`/build/${buildId}`);
                navigate(0);
            }}
            style={{border:`2px solid ${palette.primary.main}`, padding:'1rem', backgroundColor: palette.neutral.light}}
        >
            <Typography
            color={primaryDark}
            variant="h5"
            fontWeight="500"
            sx={{
                "&:hover": {
                color: primaryLight,
                cursor: "pointer",
                },
            }}
            >
            {buildNickname}
            </Typography>
            <Typography color={primaryLight} fontSize="0.75rem">
            {buildName} {position}
            </Typography>
        </Box>
        </FlexBetween>
    </FlexBetween>
    );
};

export default Build;