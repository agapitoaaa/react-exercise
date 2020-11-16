import React, { Component } from 'react';
import axios from 'axios';
import Loader from './component/Loader';
import MainView from './Views/MainView';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post:{},
      err: false,
      loading: true,
    }
  }

  componentDidMount() {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
        this.setState({
            post: res.data,
            err: false,
            loading: false,
        })
    })
    .catch(err => {
        this.setState({
            err: true,
            loading: false,
        })
    })
  }

  render(){ 
    const { post, err, loading } = this.state
    return(
      <div>
        {
          loading === true 
          ? <Loader />
          : <MainView post={post} err={err}/>
        }
      </div>
    )
  }
}

export default App;
