import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select as FormSelect,
} from "@mui/material";
import React from "react";

const Select = (props) => {
    const { name, label, value, error = null, onChange, options } = props;
    return (
        <FormControl variant='outlined' {...(error && { error: true })}>
            <InputLabel>{label}</InputLabel>
            <FormSelect label={label} name={name} value={value} onChange={onChange}>
                <MenuItem value=''>None</MenuItem>
                {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.title}
                    </MenuItem>
                ))}
            </FormSelect>
            {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    );
};

export default Select;
