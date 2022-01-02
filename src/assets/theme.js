import { createTheme } from "@mui/material";

export const myTheme = createTheme({
    palette: {
        primary: {
            main: "#333996",
            light: "#3c44b126",
        },
        secondary: {
            main: "#f83245",
            light: "#f8324526",
        },
        background: {
            default: "#f4f5fd",
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fff",
                    transform: "translateZ(0)",
                },
            },
        },
        MuiIconButton: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
    shape: {
        borderRadius: "12px",
    },
});
