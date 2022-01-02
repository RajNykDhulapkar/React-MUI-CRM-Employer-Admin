import { CssBaseline, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
// import SideMenu from "../components/SideMenu";
import "./App.css";
import { ThemeProvider } from "@mui/material";
// import { ThemeProvider } from "@mui/styles";
import { myTheme as theme } from "../assets/theme";
import PageHeader from "../components/PageHeader";
import { PeopleOutlineTwoTone } from "@mui/icons-material";
import Employees from "../pages/Employees/Employees";

const useStyles = makeStyles({
    appMain: {
        paddingLeft: "320px",
        width: "100%",
    },
});

function App() {
    const classes = useStyles();
    return (
        <>
            <ThemeProvider theme={theme}>
                <SideMenu />
                <div className={classes.appMain}>
                    <Header />

                    <Employees />
                </div>
                <CssBaseline />
            </ThemeProvider>
        </>
    );
}

export default App;
