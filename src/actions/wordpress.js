import Wordpress from '../models/Wordpress'

export const WORDPRESS_GET_ALL = 'WORDPRESS_GET_ALL'
export const WORDPRESS_GET_ALL_PAGES = 'WORDPRESS_GET_ALL_PAGES'
export const WORDPRESS_GET_ALL_POSTS = 'WORDPRESS_GET_ALL_POSTS'
export const WORDPRESS_GET_PAGE_BY_SLUG = 'WORDPRESS_GET_PAGE_BY_SLUG'

const wordpress = {}

wordpress.getAll = () => {
  return {
    type: WORDPRESS_GET_ALL,
    promise: Wordpress.getAll()
  }
}

// Returns all Pages
wordpress.getAllPages = () => (dispatch) => {
  return dispatch({
    type: WORDPRESS_GET_ALL_PAGES,
    promise: Wordpress.getAllPages()
  })
}

// Returns all Posts
wordpress.getAllPosts = () => {
  return {
    type: WORDPRESS_GET_ALL_POSTS,
    promise: Wordpress.getAllPosts()
  }
}

// Returns a Page by provided slug
// wordpress.getPageBySlug(slug){
//   const pages = this.getState().data.pages;
//   return pages[Object.keys(pages).find((page, i) => {
//       return pages[page].slug === slug;
//   })] || {};

export default wordpress
