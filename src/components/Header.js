import React from 'react';

class Result extends React.Component {
    render() {
        return (
          <div className="intro"> 
            <h1>{this.props.title}</h1>
            <p>{this.props.description}</p>
          </div>
        );
    }
}

export default Result;