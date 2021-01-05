import React from "react";
import { useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import PostAddIcon from "@material-ui/icons/PostAdd";
import PersonIcon from "@material-ui/icons/Person";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { makeStyles } from "@material-ui/core/styles";
import DetailsIcon from '@material-ui/icons/Details';
const drawerWidth = 250;
const useStyles = makeStyles(theme => ({
    "@global": {
        "*::-webkit-scrollbar": {
            display: "none"
        }
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },

    listSecond: {
        paddingTop: 0
    },
    item: {
        paddingLeft: theme.spacing(5)
    },
    drawerPaper: {
        height: "calc(100% - 64px)",
        top: 64,
        width: drawerWidth,
        backgroundColor: theme.palette.background.default
    },
    nested: {
        paddingLeft: theme.spacing(10)
    }
}));
const item = [
    { icon: <EditIcon />, title: "Blog Post", url: "/admin/table" },
    { icon: <PostAddIcon />, title: "Add New Post", url: "/admin/create" },
    {
        icon: <FeaturedPlayListIcon />,
        title: "Post List",
        url: "/admin/blog-list"
    },
    {
        icon: <DetailsIcon />,
        title: "Category List",
        url: "/admin/category-list"
    },
    {
        icon: <PeopleAltIcon />,
        title: "Cumtomer List",
        url: "/admin/customer-list"
    },
    { icon: <PersonIcon />, title: "Profile", url: "/admin/profile" },
    { icon: <ExitToAppOutlinedIcon />, title: "Logout", url: "/logout" },
];

export default function DrawerVertical(props) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className="scroll">
            <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper
                }}
                open={props.open}
                variant="permanent"
                anchor="left"
            >
                <List>
                    {item.map(el => (
                        <ListItem
                            button
                            key={el.title}
                            component="a"
                            onClick={() => history.push(el.url)}
                        >
                            <ListItemIcon>{el.icon}</ListItemIcon>
                            <ListItemText primary={el.title} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}
