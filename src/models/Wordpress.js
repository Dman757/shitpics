import { get } from '../requester'

const Wordpress = {}

Wordpress.getAllPosts = async () => {
  return get('v2/posts')
}

export default Wordpress
