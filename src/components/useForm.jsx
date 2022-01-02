import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

export const useForm = (initialFormValues, validateOnChange = false, validate) => {
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
        if (validateOnChange) validate({ [name]: value });
    };

    const resetForm = (e) => {
        setValues(initialFormValues);
        setErrors({});
    };

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    };
};

const useStyles = makeStyles({
    formRoot: {
        color: "black",
        "& .MuiFormControl-root": {
            width: "80%",
            margin: "8px",
        },
    },
});

export const Form = (props) => {
    const classes = useStyles();
    const { children, ...others } = props;
    return (
        <form className={classes.formRoot} autoComplete='off' {...others}>
            {children}
        </form>
    );
};
