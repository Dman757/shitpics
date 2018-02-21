import React from 'react'
import Post from './Post'
const Posts = (props) => {
  console.log(props)
  return (
    <div className='Wordpress-wrapper'>
      {props.posts && (
        props.posts.map((post) =>
          <Post
            key={post.id}
            {...post}
          />
        )
      )}
    </div>
  )
}
export default Posts
