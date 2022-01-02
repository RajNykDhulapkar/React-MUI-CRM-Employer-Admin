import React from "react";
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge } from "@mui/material";
import {
    ChatBubbleOutline,
    NotificationsNone,
    PowerSettingsNew,
    Search,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { grey } from "@mui/material/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fff",
    },
    searchInput: {
        opacity: "0.6",
        padding: "0px 8px",
        fontSize: "0.8rem",
        "&:hover": {
            backgroundColor: "#f2f2f2",
        },
        "& .MuiSvgIcon-root": {
            marginRight: "8px",
            // marginRight: theme.spacing(1),
        },
        btnRoot: {
            backgroundColor: "red",
        },
        btnLabel: {
            color: "white",
        },
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position='static' className={classes.root}>
            <Toolbar>
                <Grid container alignItems='center'>
                    <Grid item>
                        <InputBase
                            placeholder='Search Topics'
                            startAdornment={<Search fontSize='small' />}
                            className={classes.searchInput}
                        />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item>
                        <IconButton
                            classes={{
                                root: classes.btnRoot,
                                label: classes.btnLabel,
                            }}
                        >
                            <Badge badgeContent={4} color='secondary'>
                                <NotificationsNone fontSize='small' />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={3} color='secondary'>
                                <ChatBubbleOutline fontSize='small' />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNew fontSize='small' />
                        </IconButton>
                    </Grid>
                    {/* <Grid item></Grid> */}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
