import { lazy } from 'react'

const LoadHome = lazy(() => import('Containers/Home' /* webpackChunkName: "Container-Home" */))

const LoadAbout = lazy(() => import('Containers/About' /* webpackChunkName: "Container-About" */))

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

export default routes
