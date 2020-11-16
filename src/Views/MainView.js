import React, { Component } from 'react';
import ListViews from '../Views/ListView';
import ErrorView from '../Views/ErrorView';

class Loader extends Component {
  render(){ 
    const { post, err } = this.props
    return(
      <div>
        {
          err === false ? <ListViews post={post}/> : <ErrorView />
        }
      </div>
    )
  }
}

export default Loader;
