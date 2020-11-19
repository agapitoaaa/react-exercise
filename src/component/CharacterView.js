import React, { Component } from 'react';
import MainView from './MainView';
import Loader from './Loader';
import PropTypes from 'prop-types'
import { connect } from 'react-redux' 
import { getAllCharactersAPI as getAllCharactersAPIAction } from '../utils/endpoints'

class CharacterView extends Component {

  componentDidMount(){
    const { getAllCharactersAPI } = this.props;
    getAllCharactersAPI();
  }

  render() {
    const { post, loading, err } = this.props.characters
    return (
      <div>
        { loading === true ? <Loader/> : <MainView err={err} post={post}/>}
      </div>
    )
  }
}

CharacterView.propTypes = {
    getAllCharactersAPI: PropTypes.func,
    characters: PropTypes.shape({
        post: PropTypes.object,
        loading: PropTypes.bool,
        err: PropTypes.bool,
    })
}

const mapStateToProps = state => ({
  characters: state.characters,
})

const mapDispatchToProps = dispatch => ({
  getAllCharactersAPI: () => dispatch(getAllCharactersAPIAction()),
})
export default connect(mapStateToProps, mapDispatchToProps)(CharacterView);

