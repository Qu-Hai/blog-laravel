import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
function PublishCard() {
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true
    });

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom>Publish</Typography>
                <Divider />
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.checkedA}
                                onChange={handleChange}
                                name="checkedA"
                            />
                        }
                        label="Visibility"
                    />
                </FormGroup>
            </CardContent>
            <CardActions>
                <Button variant="outlined">Preview</Button>
                <Button variant="contained" color="primary">
                    Publish
                </Button>
            </CardActions>
        </Card>
    );
}

export default PublishCard;
