import { combineReducers } from 'redux'

import wordpress from './wordpress'
import shithouse from './shithouse'
// Import reducers

const rootReducer = combineReducers({
  wordpress,
  shithouse,
})

export default rootReducer
