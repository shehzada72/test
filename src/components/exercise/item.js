import React from 'react';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/core/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const Item = ({index, handleDeleteExercise, exercise}) => {
    return (
        <ListItem key={index} button>
            <ListItemIcon onClick={() => handleDeleteExercise(index)}>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={exercise.title} />
        </ListItem>
    );
};

export default Item;