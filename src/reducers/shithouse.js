import { handle } from 'redux-pack'

import {
  SHITHOUSE_GET_ALL
} from '../actions/shithouse'

const initialState = {
  isLoading: false,
  error: null,
  bumps: null,
}

const shithouse = (state = initialState, action) => {
  const { type, payload } = action
  // console.log(action)
  switch (type) {
    case SHITHOUSE_GET_ALL:
      return handle(state, action, {
        start: prevState => ({ ...prevState, isLoading: true, error: null, bumps: null }),
        finish: prevState => ({ ...prevState, isLoading: false }),
        failure: prevState => ({ ...prevState, error: payload }),
        success: prevState => ({ ...prevState, bumps: payload })
      })
    default:
      return state
  }
}

export default shithouse
