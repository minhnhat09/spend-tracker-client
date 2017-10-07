import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import Landing from "./Landing";
import reducers from '../reducers';
import PersistentDrawer from './PersistentDrawer';

const createStoreWithMiddleware = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(Thunk));
class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware}>
        <BrowserRouter>
            <div>
              <Route exact path="/" component={PersistentDrawer} />
            </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
