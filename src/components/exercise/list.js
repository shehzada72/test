import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/core/SvgIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Item from "./item";

const ListComponent = (props) => {
   return (
       <Grid item>
           <Paper  >
               <List component="nav" aria-label="main mailbox folders">
                   {props.exercises.map((exercise, index) => {
                       return (
                           <Item
                               exercise={exercise}
                               index={index}
                               handleDeleteExercise={props.handleDeleteExercise}
                           />
                       )
                   })}

               </List>
           </Paper>
       </Grid>
   )
};

export default ListComponent;