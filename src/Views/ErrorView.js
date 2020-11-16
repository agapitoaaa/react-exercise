import React, { Component } from 'react';
import Header from '../component/Header';

class ErrorView extends Component {

  render(){ 
      const { err } = this.props;
    return(
        <div>
            <Header headerText="Rick and Morty Errorrrr!!" />
            <div className="error-container">
                <text className="error-text">
                    Error recieved
                </text>
            </div>
        </div>
    )
  }

}

export default ErrorView;
