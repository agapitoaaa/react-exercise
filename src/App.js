import React, { Component } from 'react';
import ErrorView from './component/ErrorView';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'
import { getAllCharactersAPI } from './utils/endpoints'
import CharacterView from './component/CharacterView'

class App extends Component {

  state = {
    storeLoaded: false,
  }
  
  componentDidMount() {
    this.store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    
    this.setState({
      storeLoaded: true,
    })

    getAllCharactersAPI();
  }

  render() {
    const { storeLoaded }  = this.state;
    if (storeLoaded) {
      return (
        <Provider store={this.store}>
          <Router>
            <Switch>
              <Route path="/" component={CharacterView} exact />
              <Route path="*" component={ErrorView} />
            </Switch>
          </Router>
        </Provider>
      )
    }
    return null;
  }
}

export default App;
