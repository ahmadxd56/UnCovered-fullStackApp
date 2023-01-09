import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AboutThisProject = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    About This Project
                </Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="UnCovered"
                src="http://localhost:3001/assets/logo512.png"
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
            <FlexBetween>
                <Typography color={main}>UnCovered.com</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                We Have Used the Following Technologies in order to Complete This MERN Based Project:
                <Typography display="block">
                    -MongoDb (BackEnd)
                </Typography>
                <Typography display="block">
                    -Express (Server)
                </Typography>
                <Typography display="block">
                    -ReactJS (FrontEnd)
                </Typography>
                <Typography display="block">
                    -NodeJS (Platform)
                </Typography>
                Submitted to: Sir Usman Akram
            </Typography>
        </WidgetWrapper>
    );
};

export default AboutThisProject;