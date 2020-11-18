import React, { Component } from 'react';
import ListView from './ListView';
import ErrorView from './ErrorView';
import PropTypes from 'prop-types'

class MainView extends Component {
  render(){ 
    const { post, err } = this.props
    return(
      <div>
        {
          err === false ? <ListView post={post}/> : <ErrorView />
        }
      </div>
    )
  }
}

MainView.propTypes = {
  post: PropTypes.object,
  err: PropTypes.bool,
}

export default MainView;
