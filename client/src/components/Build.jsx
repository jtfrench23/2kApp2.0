import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";


const Build = ({ buildId, buildName, buildNickname, position }) => {
    const navigate = useNavigate();
    const { palette } = useTheme();
    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;



    return (
    <FlexBetween>
        <FlexBetween gap="1rem">
        <Box
            onClick={() => {
            navigate(`/build/${buildId}`);
            navigate(0);
            }}
        >
            <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
                "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
                },
            }}
            >
            {buildNickname}
            </Typography>
            <Typography color={medium} fontSize="0.75rem">
            {buildName} {position}
            </Typography>
        </Box>
        </FlexBetween>
    </FlexBetween>
    );
};

export default Build;