import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 0,
        // margin: theme.spacing(0.5),
        margin: "4px",
    },
    secondary: {
        backgroundColor: "lightred",
        "& .MuiButton-label": {
            color: "orange",
        },
    },
    primary: {
        backgroundColor: "lightblue",
        "& .MuiButton-label": {
            color: "purple",
        },
    },
}));

export default function ActionButton(props) {
    const { color, children, onClick } = props;
    const classes = useStyles();

    return (
        <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
            {children}
        </Button>
    );
}
