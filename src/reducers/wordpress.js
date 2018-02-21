import { handle } from 'redux-pack'

import {
  WORDPRESS_GET_ALL,
  WORDPRESS_GET_ALL_PAGES,
  WORDPRESS_GET_ALL_POSTS,
  WORDPRESS_GET_PAGE_BY_SLUG
} from '../actions/wordpress'

const initialState = {
  isLoading: false,
  error: null,
  posts: null,
  pages: null
}

const wordpress = (state = initialState, action) => {
  const { type, payload } = action
  // console.log(action)
  switch (type) {
    case WORDPRESS_GET_ALL:
    case WORDPRESS_GET_ALL_PAGES:
      return handle(state, action, {
        start: prevState => ({ ...prevState, isLoading: true, error: null, pages: null }),
        finish: prevState => ({ ...prevState, isLoading: false }),
        failure: prevState => ({ ...prevState, error: payload }),
        success: prevState => ({ ...prevState, pages: payload })
      })
    case WORDPRESS_GET_ALL_POSTS:
      return handle(state, action, {
        start: prevState => ({ ...prevState, isLoading: true, error: null, posts: null }),
        finish: prevState => ({ ...prevState, isLoading: false }),
        failure: prevState => ({ ...prevState, error: payload }),
        success: prevState => ({ ...prevState, posts: payload })
      })
    case WORDPRESS_GET_PAGE_BY_SLUG:
      return handle(state, action, {
        start: prevState => ({ ...prevState, isLoading: true, error: null, data: null }),
        finish: prevState => ({ ...prevState, isLoading: false }),
        failure: prevState => ({ ...prevState, error: payload }),
        success: prevState => ({ ...prevState, data: payload })
      })
    default:
      return state
  }
}

export default wordpress
