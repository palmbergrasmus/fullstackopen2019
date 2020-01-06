import React from 'react'
import PropTypes from 'prop-types'
import { useField } from '../hooks'

const BlogForm = ({ addBlog, visible, toggleVisible }) => {
  const title = useField('text')
  const author = useField('text')
  const url = useField('text')

  const handleAddBlog = () => {
    addBlog({ title: title.inputProps.value, author: author.inputProps.value, url: url.inputProps.value })
    resetAll()
  }

  const resetAll = () => {
    title.reset()
    author.reset()
    url.reset()
  }

  const handleToggleVisible = () => {
    resetAll()
    toggleVisible()
  }

  return (
    <div>
      {visible &&
        <div>
          <div>
            title:
            <input
              {...title.inputProps}
              name="title"
            />
          </div>
          <div>
            author:
            <input
              {...author.inputProps}
              name="author"
            />
          </div>
          <div>
            url:
            <input
              {...url.inputProps}
              name="url"
            />
          </div>
          <button onClick={handleAddBlog}>create</button>
        </div>
      }
      <button onClick={handleToggleVisible}>{visible ? 'cancel' : 'create blog'}</button>
    </div>
  )
}

BlogForm.propTypes = {
  addBlog: PropTypes.func.isRequired,
  toggleVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired
}

export default BlogForm
