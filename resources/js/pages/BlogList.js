import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import StyledIconButton from "../utils/StyledIconButton";
import getAPI from "./../utils/getAPI";
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2)
    }
}));
const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Title", width: 300 },
    { field: "create-at", headerName: "Create At", width: 130 },
    {
        field: "state",
        headerName: "State",
        type: "boolean",
        width: 100
    },

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
function BlogList() {
    const history = useHistory();
    const [data, setData] = useState([]);
    useEffect(() => {
        getAPI("api/post", "GET").then(res => {
            setData(res.data);
        });
        console.log(data);
    }, [setData]);
    const classes = useStyles();
    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                onClick={() => history.push("/admin/create")}
            >
                Create Post
            </Button>
            <DataGrid
                className={classes.root}
                rows={data}
                columns={columns}
                pageSize={7}
                autoHeight
                onRowClick={params => {
                    console.log(params.data);
                }}
            />
        </div>
    );
}

export default BlogList;
