// import { getShit } from '../requester'
import { waitResponse } from '../utils'
import { bumps } from '../constants'
import { getShit } from '../requester';

const Shithouse = {}

Shithouse.getAllBumps = async () => {
  // const derp = await waitResponse(1000, bumps) //getShit()
  const ack = await getShit();
  return ack
}

export default Shithouse
