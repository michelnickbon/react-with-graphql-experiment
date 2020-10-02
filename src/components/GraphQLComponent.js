import React from 'react';
import GraphQLManager from '../services/GraphQLManager';
import SampleQuery from '../assets/SampleQuery';
import { Button } from '@material-ui/core';

class GraphQLComponent extends React.Component {

    constructor() {
      super();
      this.state = {
        result: "Press the button to view the result",
        query: null
      };
      this.launchQuery = this.launchQuery.bind(this)
    }

    componentDidMount() {
      this.setState({ query: SampleQuery.query})
    }

    // Launch GraphQL query
    async launchQuery() {
      this.setState({ result: "Loading..." });
      const data = await GraphQLManager.GetGraphQLData(this.state.query);
      this.setState({ result: JSON.stringify(data) });
    }

    render() {
        return (
          <div className="container">
            <div className="intro"> 
              <h1>Hello there :-)</h1>
              <p> - Lets try some GraphQL! </p>
            </div>
            <div className="button">
              <Button onClick={this.launchQuery} variant="contained" color="primary" disableElevation> Run GraphQL query </Button>
            </div>
            <div className="query">
              <p> {this.state.query} </p>
            </div>
            <div className="result">
              {this.state.result}
            </div>
          </div>
        );
    }
}

export default GraphQLComponent;