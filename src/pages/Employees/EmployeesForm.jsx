import React, { useState, useEffect } from "react";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useForm, Form } from "../../components/useForm";
import Controls from "../../components/controls/Controls";

import * as employeeServices from "../../Services/employeeServices";

const genderItems = [
    { id: "male", title: "Male" },
    { id: "female", title: "Female" },
    { id: "other", title: "Other" },
];

const initialFormValues = {
    id: 0,
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "male",
    departmentId: "",
    hireDate: new Date(),
    isPermanent: false,
};

const EmployeesForm = (props) => {
    const { addOrEdit, recordForEdit } = props;
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ("fullName" in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required.";
        if ("email" in fieldValues)
            temp.email = /$^|.+@.+..+/.test(fieldValues.email) ? "" : "Email is not valid.";
        if ("mobile" in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
        if ("departmentId" in fieldValues)
            temp.departmentId =
                fieldValues.departmentId.length != 0 ? "" : "This field is required.";
        setErrors({
            ...temp,
        });

        if (fieldValues == values) return Object.values(temp).every((x) => x == "");
    };

    const { values, setValues, errors, setErrors, handleInputChange, resetForm } = useForm(
        initialFormValues,
        true,
        validate
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    };

    useEffect(() => {
        if (recordForEdit != null) {
            // console.log(recordForEdit);
            setValues({
                ...recordForEdit,
            });
        }
    }, [recordForEdit]);

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        label='Full Name'
                        name='fullName'
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label='Email'
                        name='email'
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label='Mobile'
                        name='mobile'
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label='City'
                        name='city'
                        value={values.city}
                        onChange={handleInputChange}
                        error={errors.city}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        label='Gender'
                        name='gender'
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name='departmentId'
                        value={values.departmentId}
                        label='Department'
                        onChange={handleInputChange}
                        options={employeeServices.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                    <Controls.DatePicker
                        name='hireDate'
                        value={values.hireDate}
                        label='Hire Date'
                        onChange={handleInputChange}
                    />
                    <Controls.CheckBox
                        name='isPermanent'
                        value={values.isPermanent}
                        label='Permanent Employee'
                        onChange={handleInputChange}
                    />
                    <div>
                        <Controls.Button text='Submit' type='submit' />
                        <Controls.Button color='info' text='Reset' onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    );
};

export default EmployeesForm;
