import axios from 'axios'
import config from './config'
import { waitResponse } from './utils'
import { bumps } from './constants'

let API_URL = config.WP_API_URL
let SHIT = config.SHIT_API_URL

export const get = async (endpoint) => {
  let payload = await axios.get(`${API_URL}${endpoint}`)
  // console.log(payload)
  return payload.data
}

export const getShit = async () => {

  // const agent = new https.Agent({  
  //   rejectUnauthorized: false
  // });
  // axios.get('https://something.com/foo', );
  // let payload = await axios({
  //   method: 'get',
  //   url: 'http://api.shithouse.tv',
  //   responseType: 'text',
  //   mode: 'no-cors',
  //   headers: {'Access-Control-Allow-Origin': '*',}
  //   // headers: { 'content-type': 'text/html' },
  //   // headers: {}
  // })
  // let derp = await fetch(SHIT)
  // console.log('aaaaaaaaaa', derp)
  try {
    let payload = await axios.get(SHIT)
    console.log('ack', payload.length,'payload', payload)
    return payload.data
  } catch(err) {
    console.error('YALL FUCKED UP', err)
  }
    const derp = await waitResponse(10, bumps) //BACK UP BUMPS BECAUSE FUCKIN HTTPS EXPIRED AND WALLY WON'T FIX HIS SHIT
    return derp  
}

export const post = async (endpoint, payload) => {
  let response = await axios.post(`${API_URL}${endpoint}`, payload)
  return response
}
