import {
    PeopleOutlineTwoTone,
    Search,
    Add as AddIcon,
    Close as CloseIcon,
    EditOutlined,
} from "@mui/icons-material";
import { InputAdornment, Paper, TableBody, TableCell, TableRow, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import EmployeesForm from "./EmployeesForm";
import useTable from "../../components/useTable";
import * as employeeServices from "../../Services/employeeServices";
import Controls from "../../components/controls/Controls";
import Popup from "../../components/Popup";
import ActionButton from "../../components/ActionButton";
import Notification from "../../components/Notification";
import ConfirmDialog from "../../components/ConfirmDialog";

const useStyles = makeStyles((theme) => ({
    pageContent: {
        margin: "40px",
        padding: "24px",
    },
    employeeToolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    searchInput: {
        width: "75%",
    },
    newButton: {
        position: "absolute",
        right: "10px",
    },
}));

const headCells = [
    { id: "fullName", label: "Employee Name" },
    { id: "email", label: "Email Address (Personal)" },
    { id: "mobile", label: "Mobile Number" },
    { id: "department", label: "Department", disableSorting: true },
    { id: "actions", label: "Actions", disableSorting: true },
];

const Employees = () => {
    const classes = useStyles();
    const [records, setRecords] = useState(employeeServices.getAllEmployees());
    const [filterFn, setFilterFn] = useState({
        fn: (items) => {
            return items;
        },
    });
    const [openPopup, setOpenPopup] = useState(false);
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
    });

    // console.log(records);
    const { TableContainer, TableHeader, TblPagination, recordsAfterPagingAndSorting } = useTable(
        records,
        headCells,
        filterFn
    );

    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: "",
        subTitle: "",
    });

    const handleSearch = (e) => {
        let target = e.target;
        setFilterFn({
            fn: (items) => {
                if (target.value == "") return items;
                else return items.filter((x) => x.fullName.toLowerCase().includes(target.value));
            },
        });
    };

    const addOrEdit = (employee, resetForm) => {
        if (employee.id == 0) {
            employeeServices.insertEmployee(employee);
        } else {
            employeeServices.updateEmployee(employee);
        }
        resetForm();
        setRecordForEdit(null);
        setOpenPopup(false);
        setRecords(employeeServices.getAllEmployees());
        setNotify({
            isOpen: true,
            message: "Submitted Successfully",
            type: "success",
        });
    };

    const openInPopup = (item) => {
        setRecordForEdit(item);
        setOpenPopup(true);
    };

    const onDelete = (id) => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false,
        });
        employeeServices.deleteEmployee(id);
        setRecords(employeeServices.getAllEmployees());
        setNotify({
            isOpen: true,
            message: "Deleted Successfully",
            type: "error",
        });
    };

    return (
        <>
            <PageHeader
                title='New Employee'
                subTitle='Form Design with validation'
                icon={<PeopleOutlineTwoTone fontSize='large' />}
            />
            <Paper className={classes.pageContent}>
                <Toolbar className={classes.employeeToolbar}>
                    <Controls.Input
                        label='Search Employees'
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                        onChange={handleSearch}
                    />
                    <Controls.Button
                        className={classes.newButton}
                        startIcon={<AddIcon />}
                        text='Add New'
                        variant='outlined'
                        onClick={() => {
                            setOpenPopup(true);
                            setRecordForEdit(null);
                        }}
                    />
                </Toolbar>
                <TableContainer>
                    <TableHeader />
                    <TableBody>
                        {recordsAfterPagingAndSorting().map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.fullName}</TableCell>
                                <TableCell>{item.email}</TableCell>
                                <TableCell>{item.mobile}</TableCell>
                                <TableCell>{item.department}</TableCell>
                                <TableCell>
                                    <ActionButton
                                        color='primary'
                                        onClick={() => {
                                            openInPopup(item);
                                        }}
                                    >
                                        <EditOutlined fontSize='small' />
                                    </ActionButton>
                                    <ActionButton
                                        color='secondary'
                                        onClick={() => {
                                            setConfirmDialog({
                                                isOpen: true,
                                                title: "Are you sure you want to delete this employee?",
                                                subTitle:
                                                    "Once deleted the employee data cannot be restored.",
                                                onConfirm: () => {
                                                    onDelete(item.id);
                                                },
                                            });
                                            // onDelete(item.id);
                                        }}
                                    >
                                        <CloseIcon fontSize='small' />
                                    </ActionButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
                <TblPagination />
            </Paper>
            <Popup title='Employee Form' openPopup={openPopup} setOpenPopup={setOpenPopup}>
                <EmployeesForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
            </Popup>
            <Notification notify={notify} setNotify={setNotify} />
            <ConfirmDialog confirmDialog={confirmDialog} setConfirmDialog={setConfirmDialog} />
        </>
    );
};

export default Employees;
