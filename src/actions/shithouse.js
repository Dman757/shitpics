import Shithouse from '../models/Shithouse'

export const SHITHOUSE_GET_ALL = 'SHITHOUSE_GET_ALL'

const shithouse = {}

shithouse.getAll = () => {
  return {
    type: SHITHOUSE_GET_ALL,
    promise: Shithouse.getAllBumps()
  }
}

export default shithouse
