import './styles/global.scss'

import React, { Suspense } from 'react'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import Store from './store'
import RouteWithSubroutes from 'Components/RouteWithSubRoutes'
import routes from './routes'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

const env = process.env.NODE_ENV

const App = () => {
  return (
    <Provider store={Store}>
      <Router>
        <Suspense fallback={<p>Loading</p>}>
          <Switch>
            {routes.map((route, i) => <RouteWithSubroutes key={i} {...route} />)}
          </Switch>
        </Suspense>
      </Router>
    </Provider>
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
