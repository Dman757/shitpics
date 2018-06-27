// import { getShit } from '../requester'
import { waitResponse } from '../utils'
import { bumps } from '../constants'
import { getShit } from '../requester';

const Shithouse = {}

Shithouse.getAllBumps = async () => {
  const ack = await getShit();
  console.log('ack', ack.length)
  if (ack.length <= 0) {
    const derp = await waitResponse(10, bumps) //getShit()
    return derp
  }
  return ack
}

export default Shithouse
