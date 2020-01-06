import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Blog = ({ blog, onLike, onRemoveBlog, isBlogMaker }) => {
  const [collapsed, setCollapsed] = useState(true)

  const containerStyle = {
    border: '1px solid black',
    display: 'block',
    marginTop: 6,
    padding: 6
  }

  const handleCollapsed = () => setCollapsed(!collapsed)

  const handleLikeClick = () => onLike(blog)

  const handleRemoveBlog = () => onRemoveBlog(blog)

  return (
    <div style={containerStyle}>
      <div onClick={handleCollapsed}>{`${blog.title} ${blog.author}`}</div>
      {!collapsed && <a href={blog.url}>{blog.url}</a>}
      {!collapsed && <div>
        <div style={{ display: 'inline' }}>{`${blog.likes} likes`}</div>
        <button style={{ display: 'inline' }} onClick={handleLikeClick}>like</button>
      </div>}
      {!collapsed && <div>{`added by ${blog.user.name}`}</div>}
      {!collapsed && isBlogMaker && <button onClick={handleRemoveBlog}>Remove</button>}
    </div>
  )
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
  onRemoveBlog: PropTypes.func.isRequired,
  isBlogMaker: PropTypes.bool.isRequired
}

export default Blog