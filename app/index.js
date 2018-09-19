import './styles/global.scss';

import React from 'React';
import { hot } from 'react-hot-loader'
import ReactDOM from 'react-dom'

import routes from './routes'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'

const env = process.env.NODE_ENV

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
    </Router>
  )
}

const $app = document.getElementById('app')
if (env === 'development') {
  console.log(`Console Environment is ${env}`)

  const HotApp = hot(module)(App)
  ReactDOM.render(<HotApp />, $app)
} else {
  ReactDOM.render(<App />, $app)
}
