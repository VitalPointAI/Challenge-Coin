import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import IssueCoin from './components/IssueCoin'
import configureStore from './store/configureStore'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/admin/issue_coin' component={IssueCoin} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
