import {
  AppPage,
  WhatPage
} from '../pages/'

const routes = [
  {
    path: '/',
    exact: true,
    component: AppPage
  },
  {
    path: '/what',
    component: WhatPage
  }
]

export default routes
