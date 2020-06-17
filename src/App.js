import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import store from './redux/sotre'

import Counter from './pages/counter'
import Displays from './pages/display'
import Todo from './pages/todoList'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={Todo} />
            <Route path='/counter' exact component={Counter} />
            <Route path='/display' component={Displays} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}