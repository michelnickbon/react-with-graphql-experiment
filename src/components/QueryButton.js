import React from 'react';
import { Button } from '@material-ui/core';

class QueryButton extends React.Component {

  constructor() {
    super();
    this.launchQuery = this.handleLaunchQuery.bind(this);
  }

  handleLaunchQuery(evt) {
    this.props.launchQuery(this.props.value);
  }

  render() {
    return (
      <div className="button">
        <Button onClick={this.launchQuery} variant="contained" color="primary" disableElevation> {this.props.label} </Button>
      </div>
    );
  }
}

export default QueryButton;