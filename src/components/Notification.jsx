import React from "react";
import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "&&": { top: "80px" },
    },
}));

const Notification = (props) => {
    const { notify, setNotify } = props;
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason == "clickaway") {
            return;
        }
        setNotify({
            ...notify,
            isOpen: false,
        });
    };

    return (
        <Snackbar
            className={classes.root}
            open={notify.isOpen}
            autoHideDuration={3000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={handleClose}
        >
            <Alert onClose={handleClose} severity={notify.type}>
                {notify.message}
            </Alert>
        </Snackbar>
    );
};

export default Notification;
