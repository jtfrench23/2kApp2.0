import { useEffect} from 'react';
import { 
    Box, 
    Typography, 
    useTheme,
} from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";

const BuildsWidget = ({ gamertag }) => {
    const dispatch = useDispatch();
    const { palette } = useTheme();
    const token = useSelector((state) => state.token);
    const builds = useSelector((state) => state.builds);

    const getBuilds = async () => {
    const response = await fetch(
        `http://localhost:3001/builds/all_builds`,
        {
        method: "GET",
        headers: { 
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json" 
        },
        body: JSON.stringify({gamertag:gamertag}),
        }
    );
    const data = await response.json();
    dispatch(setBuilds({ builds: data }));
    };

    useEffect(() => {
    getBuilds();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
    <WidgetWrapper>
        <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
        >
        Your Builds
        </Typography>
        <Box display="flex" flexDirection="column" gap="1.5rem">
        {builds.map((build) => (
            <Build
            key={build._id}
            buildId={build._id}
            buildName={build.buildName}
            buildNickname={build.buildNickname}
            position={build.position}
            />
        ))}
        </Box>
    </WidgetWrapper>
    );
};

export default BuildsWidget;