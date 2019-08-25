import React from 'react';
import ReactDOM from 'react-dom';
import {exercises} from "./store";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// import Home from './pages/home';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            exercises: []
        }
    }

    componentDidMount() {
        this.setState({exercises: exercises})
    };


    handleDeleteExercise = id => {
        let exercises = this.state.exercises.filter(ex => ex.id !== id);


        this.setState({exercises});
    };

    render() {
        console.log(this.state.exercises);

        return (
            <div>
                <Grid item xs={12}>
                    <Grid container justify="center">
                            <Grid item>
                                <Paper  >
                                    <List component="nav" aria-label="main mailbox folders">
                                        {this.state.exercises.map((exercise, index) => {
                                            return (
                                                <ListItem key={index} button>
                                                    <ListItemIcon onClick={() => this.handleDeleteExercise(exercise.id)}>
                                                        <InboxIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary={exercise.title} />
                                                </ListItem>
                                            )
                                        })}

                                    </List>
                                </Paper>
                            </Grid>

                        <Grid item>
                            <Paper  >
                                {this.state.exercises.length}
                            </Paper>
                        </Grid>

                    </Grid>

                </Grid>
                <Divider />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
