import React, { Component } from 'react';

class Header extends Component {
  render(){ 
      const { headerText } = this.props
    return(
      <div className="header">
        <text className="header-text">
            {headerText}
        </text>
      </div>
    )
  }

}

export default Header;
