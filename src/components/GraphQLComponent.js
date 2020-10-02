import React from 'react';
import GraphQLManager from '../services/GraphQLManager';
import SampleQuery from '../assets/SampleQuery';
import Result from './Result';
import QueryView from './QueryView';
import Header from './Header';
import QueryButton from './QueryButton';

class GraphQLComponent extends React.Component {

    constructor() {
      super();
      this.state = {
        result: "Press the button to view the result",
        title: "Hello there :-)",
        description: "- Lets try some GraphQL!",
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
            <Header title={this.state.title} description={this.state.description} />
            <QueryButton launchQuery={this.launchQuery} label="Run GraphQL query"/>
            <QueryView query={this.state.query} />
            <Result result={this.state.result} />
          </div>
        );
    }
}

export default GraphQLComponent;