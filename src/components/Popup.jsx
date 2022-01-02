import { Dialog, DialogContent, DialogTitle, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Close as CloseIcon } from "@mui/icons-material";
import ActionButton from "./ActionButton";

const useStyles = makeStyles((theme) => ({
    dialogWrapper: {
        "& .MuiPaper-root": {
            padding: "16px",
            position: "absolute",
            top: "40px",
        },
    },
}));

const Popup = (props) => {
    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles();
    return (
        <Dialog open={openPopup} maxWidth='md' className={classes.dialogWrapper}>
            <DialogTitle>
                <div style={{ display: "flex" }}>
                    <Typography variant='h6' component='div' style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <ActionButton
                        color='secondary'
                        onClick={() => {
                            setOpenPopup(false);
                        }}
                    >
                        <CloseIcon />
                    </ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>{children}</DialogContent>
        </Dialog>
    );
};

export default Popup;
