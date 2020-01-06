import React from 'react'
import Blog from './Blog'
import PropTypes from 'prop-types'

const Blogs = ({ blogs, onLike, onRemoveBlog, user }) => {

  const renderBlogs = () => {
    return (
      blogs.sort((a, b) => a.likes < b.likes ? 1 : -1).map((blog, index) => {
        const isBlogMaker = blog.user.username === user.username
        return <Blog key={index} blog={blog} onLike={onLike} onRemoveBlog={onRemoveBlog} isBlogMaker={isBlogMaker} />
      })
    )
  }

  return (
    <div>
      {renderBlogs()}
    </div>
  )
}

Blogs.propTypes = {
  blogs: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
  onLike: PropTypes.func.isRequired,
  onRemoveBlog: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default Blogs