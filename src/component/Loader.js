import React, { Component } from 'react';

class Loader extends Component {

  render(){ 
      const { err } = this.props;
    return(
            <div className="loader-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" /> 
            </div>
    )
  }

}

export default Loader ;
