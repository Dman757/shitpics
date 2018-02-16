import { combineReducers } from 'redux'

import wordpressReducer from './wordpress'
// Import reducers

const rootReducer = combineReducers({
  wordpressReducer
})

export default rootReducer
