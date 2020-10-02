import React from 'react';
import { Button } from '@material-ui/core';

class QueryButton extends React.Component {

  constructor() {
    super();
    this.handleLaunchQuery = this.handleLaunchQuery.bind(this);
  }

  handleLaunchQuery() {
    this.props.launchQuery();
  }

  render() {
    return (
      <div className="button">
        <Button onClick={this.handleLaunchQuery} variant="contained" color="primary" disableElevation> {this.props.label} </Button>
      </div>
    );
  }
}

export default QueryButton;