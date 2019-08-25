import React from 'react';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const Counter = (props) => {
    return (
        <Grid item>
            <Paper  >
                {props.exercises.length}
            </Paper>
        </Grid>
    )
};

export default Counter;