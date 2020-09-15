import React from 'react';
import GraphQLManager from '../assets/GraphQLManager';
import { Button } from '@material-ui/core';

class GraphQLComponent extends React.Component {

    constructor() {
        super();
        this.state = {
          result: "Press the button to view the result",
          query: `query {
            Country(alpha2Code: "SE") {
              name
              nativeName
              population
              convertedArea(areaUnit: SQUARE_MILES) {
                populationDensity
              }
              capital
              location {
                latitude
                longitude
              }
              currencies {
                name
                symbol
              }
              flag {
                emoji
                svgFile
              }
            }
          }`
        };
        this.launchQuery = this.launchQuery.bind(this)
    }

    // Launch GraphQL query
    async launchQuery() {
      this.setState({ result: "Loading..." });
      const result = await GraphQLManager.GetGraphQLData(this.state.query);
      this.setState({ result: JSON.stringify(result, null, 2) });
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