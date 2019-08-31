import React from 'react';
import {exercises} from "../../store";
import Layout from "../../hoc/layout";

class ItemDetail extends React.Component{
    state = {
        exercise: {}
    };

    componentDidMount() {
        console.log(this.props);
        console.log(this.props.match.params.id);

        this.fetchDetail(this.props.match.params.id);
    }

    fetchDetail = (title) => {
        let exercise = exercises.find(ex => ex.title === title)

        this.setState({
            exercise
        })
    };

    render () {
        let {exercise} = this.state;

        return (
            <Layout>
            <div>Item Detail</div>
                <h1>Id: {exercise.id}</h1>
                <h1>Title: {exercise.title}</h1>
                <h2>Description: {exercise.description}</h2>
                <h1>Category: {exercise.muscles}</h1>
            </Layout>
        )
    }
}

export default ItemDetail;