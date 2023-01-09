import { useState } from "react";
import {
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import {
    DarkMode,
    LightMode,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "store/ActionsReducers";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";
import logo from "UnCovered-Logo.png"

const Navbar = () => {
    const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const theme = useTheme();
    const neutralLight = theme.palette.neutral.light;
    const dark = theme.palette.neutral.dark;
    const alt = theme.palette.background.alt;

    const fullName = `${user.firstName} ${user.lastName}`;

    return (
        <FlexBetween padding="1rem 4%" backgroundColor={alt}>
            <FlexBetween gap="1.75rem">
                <img src={logo} alt="UnCovered-Let's Uncover Together"
                    onClick={() => navigate("/home")
                    }
                />
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === "dark" ? (
                        <DarkMode sx={{ fontSize: "30px" }} />
                    ) : (
                        <LightMode sx={{ color: dark, fontSize: "30px" }} />
                    )}
                </IconButton>
            </FlexBetween>

            {isNonMobileScreens ? (
                <FlexBetween gap="2rem">
                    <FlexBetween
                        backgroundColor={neutralLight}
                        borderRadius="0.25rem"
                        padding="0.2rem 1.8rem"
                    >
                        <InputBase placeholder="Search UnCovered" />
                    </FlexBetween>
                    <FormControl variant="standard" value={fullName}>
                        <Select
                            value={fullName}
                            sx={{
                                backgroundColor: neutralLight,
                                width: "200px",
                                borderRadius: "0.25rem",
                                p: "0.25rem 1rem",
                                "& .MuiSvgIcon-root": {
                                    pr: "0.25rem",
                                    width: "3rem",
                                },
                                "& .MuiSelect-select:focus": {
                                    backgroundColor: neutralLight,
                                },
                            }}
                            input={<InputBase />}
                        >
                            <MenuItem value={fullName}>
                                <Typography>{fullName}</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
                        </Select>
                    </FormControl>
                </FlexBetween>
            ) : (
                <FormControl variant="standard" value={fullName}>
                    <Select
                        value={fullName}
                        sx={{
                            backgroundColor: neutralLight,
                            width: "200px",
                            borderRadius: "0.25rem",
                            p: "0.25rem 1rem",
                            "& .MuiSvgIcon-root": {
                                pr: "0.25rem",
                                width: "3rem",
                            },
                            "& .MuiSelect-select:focus": {
                                backgroundColor: neutralLight,
                            },
                        }}
                        input={<InputBase />}
                    >
                        <MenuItem value={fullName} >
                            <Typography>{fullName}</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
                    </Select>
                </FormControl>
            )}
        </FlexBetween>
    );
};

export default Navbar;