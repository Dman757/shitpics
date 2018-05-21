// import { getShit } from '../requester'
import { waitResponse } from '../utils'
import { bumps } from '../constants'

const Shithouse = {}

Shithouse.getAllBumps = async () => {
  const derp = await waitResponse(1000, bumps) //getShit()
  console.log(derp)
  return derp
}

export default Shithouse
