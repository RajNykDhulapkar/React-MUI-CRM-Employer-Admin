import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Controls from "./controls/Controls";
import { IconButton } from "@mui/material";
import { NotListedLocation as NotListedLocationIcon } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    dialog: {
        "& .MuiPaper-root": {
            padding: "16px",
            position: "absolute",
            top: "40px",
        },
    },
    dialogTitle: {
        textAlign: "center",
    },
    dialogContent: {
        textAlign: "center",
    },
    dialogAction: {
        "&&": { justifyContent: "center" },
    },
    titleIcon: {
        backgroundColor: "pink",
        // backgroundColor: theme.palette.secondary.light,
        color: "orange",
        "&:hover": {
            // backgroundColor: theme.palette.secondary.light,
            backgroundColor: "pink",
            cursor: "pointer",
        },
        "& .MuiSvgIcon-root": {
            fontSize: "8rem",
        },
    },
}));

const ConfirmDialog = (props) => {
    const { confirmDialog, setConfirmDialog } = props;

    const classes = useStyles();
    return (
        <Dialog className={classes.dialog} open={confirmDialog.isOpen}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <NotListedLocationIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant='h6'>{confirmDialog.title}</Typography>
                <Typography variant='subtitle2'>{confirmDialog.subTitle}</Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Controls.Button
                    color='secondary'
                    text='No'
                    onClick={() => {
                        setConfirmDialog({ ...confirmDialog, isOpen: false });
                    }}
                />
                <Controls.Button color='primary' text='yes' onClick={confirmDialog.onConfirm} />
            </DialogActions>
        </Dialog>
    );
};

export default ConfirmDialog;
