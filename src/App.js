import React, { Component } from 'react';
import axios from 'axios';
import Loader from './component/Loader';
import MainView from './component/MainView';
import ErrorView from './component/ErrorView';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ENDPOINT } from './utils/variables';

class App extends Component {

  state = {
    post: {},
    err: false,
    loading: true,
  }

  componentDidMount() {
    axios.get(ENDPOINT+'/character/')
      .then(res => {
        this.setState({
          post: res.data,
          err: false,
          loading: true,
        })
      })
      .catch(() => {
        this.setState({
          err: true,
          loading: false,
        })
      })
  }

  render() {
    const { post, err, loading } = this.state
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <div>
              {
                loading === true
                  ? <Loader />
                  : <MainView post={post} err={err} />
              }
            </div>
          </Route>
          <Route path="*" component={ErrorView} />
        </Switch>
      </Router>
    )
  }
}

export default App;
