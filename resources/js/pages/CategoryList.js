import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import StyledIconButton from "../utils/StyledIconButton";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import getAPI from "./../utils/getAPI";
import callAPI from "./../utils/callAPI";
import ImageIcon from "@material-ui/icons/Image";
const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2)
    },
    textField: {
        display: "flex",
        margin: theme.spacing(3),
        marginBottom: theme.spacing(1)
    },
    button: {
        marginLeft: theme.spacing(3)
    },
    card: {
        marginTop: theme.spacing(3)
    },
    input: {
        marginLeft: theme.spacing(3),
        display: "none"
    },
    img: {
        margin: theme.spacing(3),
        marginTop: theme.spacing(0),
        display: "block",
        width: 50
    }
}));
const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "image", headerName: "Image", width: 150 },
    { field: "created_at", headerName: "Create At", width: 200 },
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

const CategoryList = () => {
    const [name, setName] = useState("");
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [image, setImage] = useState(null);
    const handleChangeName = event => {
        setName(event.target.value);
    };

    useEffect(() => {
        getAPI("api/category", "GET").then(res => {
            setData(res.data);
        });
    }, [setData]);
    useEffect(() => {
        getAPI("api/category", "GET").then(res => {
            setData(res.data);
        });
    }, [open]);
    const classes = useStyles();
    const handleSubmit = event => {
        event.preventDefault();

        let formData = new FormData();
        formData.append("name", name);
        formData.append("image", image);
        callAPI("api/category", "POST", formData).then(res => {
            console.log(res);
            setOpen(!open);
        });
    };
    return (
        <div>
            <Container maxWidth="lg">
                <form onSubmit={handleSubmit}>
                    <Grid
                        container
                        justify="flex-start"
                        direction="column"
                        spacing={2}
                    >
                        <Grid item>
                            <TextField
                                className={classes.textField}
                                label="Name"
                                variant="outlined"
                                onChange={handleChangeName}
                            />
                        </Grid>
                        <Grid item>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                type="file"
                                onChange={event => {
                                    setImage(event.target.files[0]);
                                }}
                            />
                            <label htmlFor="contained-button-file">
                                <Button
                                    className={classes.button}
                                    variant="outlined"
                                    endIcon={<ImageIcon />}
                                    component="span"
                                >
                                    Upload Image
                                </Button>
                            </label>
                            <img style={{ width: 50 }} src={image} />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.button}
                            >
                                Create Category
                            </Button>
                        </Grid>
                    </Grid>
                </form>

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

export default CategoryList;
