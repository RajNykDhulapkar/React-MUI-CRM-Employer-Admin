import React from "react";
import { TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import FormDatePicker from "@mui/lab/DatePicker";
import { convertToDefaultEventParam } from "./CheckBox";

const DatePicker = (props) => {
    const { name, value, label, onChange } = props;

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <FormDatePicker
                label={label}
                name={name}
                value={value}
                onChange={(newValue) => {
                    onChange(convertToDefaultEventParam(name, newValue));
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default DatePicker;
