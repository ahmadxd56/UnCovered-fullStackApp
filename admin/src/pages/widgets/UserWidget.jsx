import {
    LocationOnOutlined,
    WorkOutlineOutlined,
    GitHub,
    Instagram,
    LinkedIn,
} from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;

    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setUser(data);
    };

    useEffect(() => {
        getUser();
    }, []);
    if (!user) {
        return null;
    }

    const {
        firstName,
        lastName,
        location,
        occupation,
        viewedProfile,
        impressions,
        friends,
        instagram,
        linkedin,
    } = user;

    return (
        <WidgetWrapper>
            <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                onClick={() => navigate(`/profile/${userId}`)}
            >
                <FlexBetween gap="1rem">
                    <UserImage image={picturePath} />
                    <Box>
                        <Typography
                            variant="h4"
                            color={dark}
                            fontWeight="500"
                            sx={{
                                "&:hover": {
                                    color: palette.neutral.light,
                                    cursor: "pointer",
                                },
                            }}
                        >
                            {firstName} {lastName}
                        </Typography>
                        <Typography color={medium}>{friends.length} friends</Typography>
                    </Box>
                </FlexBetween>
            </FlexBetween>

            <Divider />

            <Box p="1rem 0">
                <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                    <LocationOnOutlined fontSize="large" sx={{ color: main }} />
                    <Typography color={medium}>{location}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                    <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
                    <Typography color={medium}>{occupation}</Typography>
                </Box>
            </Box>

            <Divider />

            <Box p="1rem 0">
                <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
                    FA22 Github Repository
                </Typography>
                <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                    <GitHub fontSize="large" sx={{ color: main }} />
                    <Typography color={dark}>
                        <a href='https://github.com/ahmadxd56/SP20-BCS-008.git' target='_blank'>Click Here to Open Repository</a>
                    </Typography>
                </Box>
            </Box>
            <Divider />

            <Box p="1rem 0">
                <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
                    Other Profiles
                </Typography>

                <FlexBetween gap="1rem" mb="0.5rem">
                    <FlexBetween gap="1rem">
                        <Box>
                            <Box display="flex" alignItems="center" gap="1rem" mb="0.4rem">
                                <Instagram fontSize="large" sx={{ color: main }} />
                                <Typography color={main} fontWeight="500">
                                    Instagram
                                    <Typography color={medium}>{instagram}</Typography>
                                </Typography>
                            </Box>
                        </Box>
                    </FlexBetween>
                </FlexBetween>

                <FlexBetween gap="1rem" mb="0.5rem">
                    <FlexBetween gap="1rem">
                        <Box>
                            <Box display="flex" alignItems="center" gap="1rem" mb="0.4rem">
                                <LinkedIn fontSize="large" sx={{ color: main }} />
                                <Typography color={main} fontWeight="500">
                                    LinkedIn
                                    <Typography color={medium}>{linkedin}</Typography>
                                </Typography>
                            </Box>
                        </Box>
                    </FlexBetween>
                </FlexBetween>
            </Box>
        </WidgetWrapper>
    );
};

export default UserWidget;