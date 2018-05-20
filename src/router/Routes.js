import {
  AppPage,
  WhatPage,
  Shithouse
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
  },
  {
    path: '/shithouse',
    component: Shithouse
  }
]

export default routes
