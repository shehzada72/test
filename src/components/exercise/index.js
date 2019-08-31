import React from "react";
import {exercises} from "../../store";
import Divider from '@material-ui/core/Divider';
import Grid from "@material-ui/core/Grid";
import List from './list';
import Counter from "./counter";
import Header from "../home/header";
import Layout from "../../hoc/layout";

class Exercise extends React.Component {

    state = {
        exercises: []
    };

    componentDidMount() {
        this.setState({exercises: exercises})
    };


    handleDeleteExercise = index => {
        // let exercises = this.state.exercises.filter(ex => ex.id !== id);

        let {exercises} = this.state;
        exercises.splice(index, 1);

        this.setState({exercises});
    };

    render() {
        console.log(this.state.exercises);

        return (
            <Layout>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <List exercises={this.state.exercises} handleDeleteExercise={this.handleDeleteExercise}/>

                        <Counter exercises={this.state.exercises}/>

                    </Grid>

                </Grid>
                <Divider />
            </Layout>
        )
    }
}

export default Exercise;