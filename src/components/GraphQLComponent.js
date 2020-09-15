import React from 'react';
import GraphQLManager from '../assets/GraphQLManager';

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
        return <h2>Hello there! Lets try some GraphQL</h2>;
    }
}

export default GraphQLComponent;