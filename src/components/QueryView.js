import React from 'react';

class QueryView extends React.Component {
    render() {
        return (
          <div className="query">
            <p> {this.props.query} </p>
          </div>
        );
    }
}

export default QueryView;