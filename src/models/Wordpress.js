import { get } from '../requester'

const Wordpress = {}

Wordpress.getAllPosts = async () => {
  return get('wp/v2/posts')
}

Wordpress.getAllPages = async () => {
  return get('wp/v2/pages')
}

export default Wordpress
