import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, Paper, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    pageHeaderRoot: {
        "&&": {
            backgroundColor: "#fdfdff",
        },
    },
    pageHeader: {
        padding: "32px",
        display: "flex",
        marginBottom: "16px",
    },
    pageIcon: {
        display: "inline-block",
        padding: "16px",
        "&&": {
            color: "#3c44b1",
        },
    },
    pageTitle: {
        paddingLeft: "32px",
        "& .MuiTypography-subtitle2": {
            opacity: "0.6",
        },
    },
}));

const PageHeader = (props) => {
    const classes = useStyles();
    const { title, subTitle, icon } = props;
    return (
        <Paper className={classes.pageHeaderRoot} elevation={0} square>
            <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>{icon}</Card>
                <div className={classes.pageTitle}>
                    <Typography component='div' variant='h6'>
                        {title}
                    </Typography>
                    <Typography component='div' variant='subtitle2'>
                        {subTitle}
                    </Typography>
                </div>
            </div>
        </Paper>
    );
};

export default PageHeader;
