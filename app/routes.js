import React from 'react'
import Loadable from 'react-loadable'

const env = process.env.NODE_ENV

const Loader = () => {
  return (<p>Page is loading</p>)
}

const LoadHome = Loadable({
  loader: () => import('Containers/Home' /* webpackChunkName: "Container-Home" */),
  loading: Loader
})

const LoadAbout = Loadable({
  loader: () => import('Containers/About' /* webpackChunkName: "Container-About" */),
  loading: Loader
})

const routes = [
  {
    path: '/',
    component: LoadHome,
    exact: true
  },
  {
    path: '/about',
    component: LoadAbout
  }
]

export default routes;