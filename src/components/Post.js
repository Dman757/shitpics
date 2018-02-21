import React from 'react'

const Post = (props) => {
  // const { wordpress } = props
  // console.log(props)
  // console.log(wordpress.posts)
  return (
    <div className='Wordpress-post'>
      <h2>{props.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{__html: props.content.rendered}} />
    </div>
  )
}
export default Post
