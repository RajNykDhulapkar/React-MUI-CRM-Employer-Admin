import React from "react";
import { Checkbox as FormCheckBox, FormControl, FormControlLabel } from "@mui/material";

export const convertToDefaultEventParam = (name, value) => ({
    target: {
        name,
        value,
    },
});

const CheckBox = (props) => {
    const { name, value, label, onChange } = props;

    return (
        <FormControl>
            <FormControlLabel
                control={
                    <FormCheckBox
                        name={name}
                        color='primary'
                        checked={value}
                        onChange={(e) =>
                            onChange(convertToDefaultEventParam(name, e.target.checked))
                        }
                    />
                }
                label={label}
            />
        </FormControl>
    );
};

export default CheckBox;
