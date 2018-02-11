import {
  AppPage,
  WhatPage
} from '../Pages/'

const routes = [
  {
    path: '/',
    exact: true,
    component: AppPage
  },
  {
    path: '/what',
    exact: true,
    component: WhatPage
  }
]

export default routes
