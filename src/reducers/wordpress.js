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
  data: null
}

const wordpressReducer = (state = initialState, action) => {
  const { type, payload } = action
  console.log(action)
  switch (type) {
    case WORDPRESS_GET_ALL:
    case WORDPRESS_GET_ALL_PAGES:
    case WORDPRESS_GET_ALL_POSTS:
    case WORDPRESS_GET_PAGE_BY_SLUG:
      return handle(state, action, {
        start: prevState => ({ ...prevState, isLoading: true, error: null, data: null }),
        finish: prevState => ({ ...prevState, isLoading: false }),
        failure: prevState => ({ ...prevState, error: payload }),
        success: prevState => ({ ...prevState, foo: payload })
      })
    default:
      return state
  }
}

export default wordpressReducer
