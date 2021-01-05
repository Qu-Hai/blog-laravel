import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import StyledIconButton from "../utils/StyledIconButton";
import Container from "@material-ui/core/Container";
import getAPI from "./../utils/getAPI";
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2)
    }
}));
const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "first_name", headerName: "First Name", width: 150 },
    { field: "last_name", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    {
        field: "role_id",
        headerName: "Role",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 100,
        valueGetter: params => `${params == 1 ? "Admin" : "User"}`
    },
    { field: "created_at", headerName: "Create At", width: 130 },
    {
        field: "options",
        headerName: "Options",
        width: 150,
        renderCell: params => (
            <strong
                style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around"
                }}
            >
                {params.value}
                <StyledIconButton title="Edit" onClick={handleBlock}>
                    <CreateOutlinedIcon />
                </StyledIconButton>
                <StyledIconButton title="More" onClick={handleBlock}>
                    <ArrowRightAltIcon />
                </StyledIconButton>
            </strong>
        )
    }
];

const handleBlock = () => {
    console.log("Block");
};
const CustomerList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAPI("api/user", "GET").then(res => {
            setData(res.data);
        });
        console.log(data);
    }, [setData]);
    const classes = useStyles();
    return (
        <div>
            <Container maxWidth="lg">
                <Button variant="contained" color="primary">
                    Create Customer
                </Button>
                <DataGrid
                    className={classes.root}
                    rows={data}
                    columns={columns}
                    pageSize={7}
                    autoHeight
                    onRowClick={params => {
                        console.log(params.row);
                    }}
                />
            </Container>
        </div>
    );
};

export default CustomerList;
