import React from 'react';
import GraphQLManager from '../assets/GraphQLManager';
import { Button } from '@material-ui/core';

class GraphQLComponent extends React.Component {

    constructor() {
        super();
        this.result = null;
        this.query = `query { Lift(id: "panorama") { name status }}`;
    }

    async componentDidMount() {
        const result = await GraphQLManager.GetGraphQLData(this.query);
        console.log(result);
    }

    render() {
        return (
          <div className="container">
            <h1>Hello there!</h1>
            <p> - Lets try some GraphQL! </p>
            <Button variant="contained" color="primary" disableElevation> Run GraphQL query </Button>
          </div>
        );
    }
}

export default GraphQLComponent;