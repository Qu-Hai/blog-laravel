import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import ImageIcon from "@material-ui/icons/Image";
import Checkbox from "@material-ui/core/Checkbox";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import callAPI from "./../utils/callAPI";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import axios from "axios";
const useStyles = makeStyles(theme => ({
    root: {
        marginLeft: 0
    },
    textField: {
        display: "flex",
        margin: theme.spacing(3)
    },
    formGroup: {
        display: "flex",
        flexDirection: "column"
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
        display: "block",
        width: 50
    },
    select: {}
}));
function CreatePost() {
    const [list, setList] = useState([]);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [author, setAuthor] = useState(localStorage.getItem("user_id"));
    useEffect(() => {
        axios.get("http://localhost:8000/api/category").then(res => {
            setList(res.data);
            setCategory(res.data[0].id);
        });
    }, [setList]);
    const handleChangeTitle = event => {
        setTitle(event.target.value);
    };
    const handleChangeCategory = event => {
        setCategory(event.target.value);
    };
    const handleChangeDescription = event => {
        setDescription(event.target.value);
    };
    const handleChangeEditor = (event, editor) => {
        setContent(editor.getData());
    };

    const classes = useStyles();

    const handleSubmit = event => {
        event.preventDefault();
        console.log(image);
        let formData = new FormData();
        formData.append("title", title);
        formData.append("category_id", category);
        formData.append("description", description);
        formData.append("image", image);
        formData.append("value", content);
        formData.append("author_id", author);
        callAPI("api/post", "POST", formData).then(res => console.log(res));
    };
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link href="/admin"> Admin</Link>
                <Link href="/admin/create-post"> Add New Post</Link>
            </Breadcrumbs>

            <Grid container spacing={3}>
                <Grid item lg={8}>
                    <Card>
                        <TextField
                            className={classes.textField}
                            label="Title"
                            variant="outlined"
                            onChange={handleChangeTitle}
                        />
                        <FormControl
                            className={classes.textField}
                            variant="outlined"
                        >
                            <InputLabel id="demo-simple-select-outlined-label">
                                Select Categories
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={category}
                                onChange={handleChangeCategory}
                                label="Select Categories"
                            >
                                {list.map(el => (
                                    <MenuItem value={el.id}>
                                        {el.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField
                            className={classes.textField}
                            label="Description"
                            variant="outlined"
                            onChange={handleChangeDescription}
                        />
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
                        <img src={image} className={classes.img} />
                        <CKEditor
                            editor={ClassicEditor}
                            data=""
                            onChange={handleChangeEditor}
                        />
                    </Card>
                </Grid>
                <Grid item lg={4}>
                    {/* PublishCard */}
                    <form onSubmit={handleSubmit}>
                        <Card>
                            <CardContent>
                                <Typography gutterBottom>Publish</Typography>
                                <Divider />
                            </CardContent>
                            <CardActions>
                                <Button variant="outlined">Preview</Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Publish
                                </Button>
                            </CardActions>
                        </Card>
                    </form>
                    {/* PublishCard */}
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography gutterBottom>Categories</Typography>
                            <Divider />
                            <FormGroup row className={classes.formGroup}>
                                <FormControlLabel
                                    control={<Checkbox color="primary" />}
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" />}
                                    label="Secondary"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" />}
                                    label="Secondary"
                                />
                            </FormGroup>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CreatePost;
