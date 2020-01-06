import React, { useState, useEffect } from 'react'
import loginService from './services/login'
import blogsService from './services/blogs'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'
import BlogForm from './components/BlogForm'

const App = () => {
  const [loginVisible, setLoginVisible] = useState(false)
  const [createBlogVisible, setCreateBlogVisible] = useState(false)
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    blogsService
      .getAll()
      .then(initialBlogs => setBlogs(initialBlogs))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogsService.setToken(user.token)
    }
  }, [])

  const toggleLoginVisible = () => {
    if (loginVisible) {
      setLoginVisible(false)
    } else {
      setLoginVisible(true)
    }
  }

  const handleCreateBlogVisible = () => setCreateBlogVisible(!createBlogVisible)

  const handleLogin = async (username, password) => {
    try {
      const user = await loginService.login({ username, password })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )

      blogsService.setToken(user.token)
      setUser(user)
    } catch (exception) {
      setErrorMessage('wrong username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = () => {
    setUser(null)
    window.localStorage.removeItem('loggedNoteappUser')
  }

  const renderLoginForm = () => {
    return (
      <LoginForm
        handleLogin={handleLogin}
        visible={loginVisible}
        handleVisible={toggleLoginVisible}
      />
    )
  }

  const handleAddBlog = async (blog) => {
    try {
      const newBlog = await blogsService.create(blog)
      if (newBlog.status === 200) {
        const author = newBlog.data.author
        setSuccessMessage(`a new blog ${blog.title} added${author ? ` by ${author}.` : '.'}`)
        const newBlogs = await blogsService.getAll()
        setBlogs(newBlogs)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
      } else {
        setErrorMessage(`${newBlog.response.data.error}`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    } catch (exception) {
      setErrorMessage(`${exception}`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLikeClick = async (blog) => {
    try {
      const updatedBlog = {
        likes: blog.likes + 1,
        author: blog.author,
        title: blog.title,
        url: blog.url
      }
      await blogsService.update(blog.id, updatedBlog)
      const newBlogs = await blogsService.getAll()
      setBlogs(newBlogs)
    } catch (exception) {
      console.log(exception)
    }
  }

  const handleRemoveBlog = async (blog) => {
    if (window.confirm(`Remove blog ${blog.title}`)) {
      try {
        const deleted = await blogsService.remove(blog.id)
        if (deleted.status === 204) {
          setSuccessMessage(`${blog.title} was succesfully removed`)
          const newBlogs = await blogsService.getAll()
          setBlogs(newBlogs)
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        } else {
          setErrorMessage(`${deleted.response.data.error}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        }
      } catch (exception) {
        setErrorMessage(`${exception}`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
    }
  }

  return (
    <div className="App">
      <h1 className="App-header">Blogs</h1>
      <div style={{ color: 'red' }}>{errorMessage}</div>
      <div style={{ color: 'green' }}>{successMessage}</div>
      {!user
        ? renderLoginForm()
        :
        <div>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <p>{`${user.name} logged in`}</p>
            <button onClick={handleLogout}>logout</button>
          </div>
          <h2>create new blog</h2>
          <BlogForm addBlog={handleAddBlog} visible={createBlogVisible} toggleVisible={handleCreateBlogVisible}/>
          <Blogs blogs={blogs} onLike={handleLikeClick} onRemoveBlog={handleRemoveBlog} user={user}/>
        </div>
      }
    </div>
  )
}

export default App
