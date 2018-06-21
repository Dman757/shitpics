import axios from 'axios'
import config from './config'

let API_URL = config.WP_API_URL
let SHIT = config.SHIT_API_URL

export const get = async (endpoint) => {
  let payload = await axios.get(`${API_URL}${endpoint}`)
  // console.log(payload)
  return payload.data
}

export const getShit = async () => {
  // let payload = await axios({
  //   method: 'get',
  //   url: 'http://api.shithouse.tv',
  //   responseType: 'text',
  //   mode: 'no-cors',
  //   headers: {'Access-Control-Allow-Origin': '*',}
  //   // headers: { 'content-type': 'text/html' },
  //   // headers: {}
  // })
    let payload = await axios.get(SHIT)
  return payload.data
}

export const post = async (endpoint, payload) => {
  let response = await axios.post(`${API_URL}${endpoint}`, payload)
  return response
}
