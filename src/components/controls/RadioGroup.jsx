import {
    FormControl,
    FormControlLabel,
    FormLabel,
    ListItemSecondaryAction,
    Radio,
    RadioGroup as FormRadioGroup,
} from "@mui/material";
import React from "react";

const RadioGroup = (props) => {
    const { items, label, value, onChange } = props;
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <FormRadioGroup row name='gender' value={value} onChange={onChange}>
                {items.map((item) => (
                    <FormControlLabel
                        key={item.id}
                        value={item.id}
                        label={item.title}
                        control={<Radio />}
                    />
                ))}
            </FormRadioGroup>
        </FormControl>
    );
};

export default RadioGroup;
