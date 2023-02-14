import { useEffect} from 'react';
import { 
    Box, 
    Typography, 
    useTheme,
} from "@mui/material";
import WidgetWrapper from "components/WidgetWrapper";
import { useDispatch, useSelector } from "react-redux";
import {setBuilds} from "state";
import Build from "components/Build";
const BuildsWidget = ({ gamertag }) => {
    const dispatch = useDispatch();
    const { palette } = useTheme();
    const token = useSelector((state) => state.token);
    const builds = useSelector((state) => state.builds);

    const getBuilds = async () => {
        console.log('getting builds');
        const response = await fetch(
            `http://localhost:3001/builds/${gamertag}/all_builds`,
            {
            method: "GET",
            headers: { 
                Authorization: `Bearer ${token}`,
            },
            }
        );
        const data = await response.json();
        console.log(data);
        dispatch(setBuilds({ builds: data }));
    };

    useEffect(() => {
        getBuilds();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
    <WidgetWrapper>
        <Typography
            color={palette.neutral.dark}
            variant="h3"
            fontWeight="500"
            sx={{ mb: "1.5rem"}}
        >
            Your Builds
        </Typography>
        <Box display="flex" flexDirection="column" gap="1.5rem">
            {builds.map((builds) => (
                <Build 
                        buildId={builds._id}
                        buildName={builds.buildName}
                        buildNickname={builds.buildNickname}
                        position={builds.position}
                    />
                    ))}
        </Box>
    </WidgetWrapper>
    );
};

export default BuildsWidget;