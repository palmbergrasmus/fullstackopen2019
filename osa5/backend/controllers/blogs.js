const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')


blogsRouter.get('/', async (request, response, next) => {
  try {
    const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
    response.json(blogs.map(blog => blog.toJSON()))
  } catch (exception) {
    next(exception)
  }
})

blogsRouter.get('/:id', async (request, response, next) => {
  try {
    const blog = await Blog.findById(request.params.id).populate('user', { username: 1, name: 1 })
    blog ? response.json(blog.toJSON()) : response.status(404).end()
  } catch (exception) {
    next(exception)
  }
})

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body

  try {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    if (!decodedToken || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)

    const blog = new Blog({
      likes: body.likes,
      title: body.title,
      url: body.url,
      author: body.author,
      user: user.id
    })

    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog.toJSON())
  } catch (exception) {
    next(exception)
  }
})

blogsRouter.delete('/:id', async (request, response, next) => {
  try {
    const blogIdToDelete = request.params.id
    const blog = await Blog.findById(blogIdToDelete)
    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (blog.user.toString() === decodedToken.id) {
      await Blog.findByIdAndRemove(blogIdToDelete)
      response.status(204).end()
    } else {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
  } catch (exception) {
    next(exception)
  }
})

blogsRouter.put('/:id', async (request, response, next) => {
  try {
    const { title, author, likes, url } = request.body
    const blogBefore = await Blog.findById(request.params.id)
    const oneLikeAdded =
      author === blogBefore.author
      && title === blogBefore.title
      && url === blogBefore.url
      && likes === blogBefore.likes + 1

    const blog = {
      title,
      author,
      url,
      likes
    }

    if (oneLikeAdded) {
      const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
      response.json(updatedBlog.toJSON())
    } else {
      const decodedToken = jwt.verify(request.token, process.env.SECRET)
      if (blogBefore.user.toString() === decodedToken.id) {
        await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
        response.status(201).end()
      } else {
        return response.status(401).json({ error: 'token missing or invalid' })
      }
    }
  } catch (exception) {
    next(exception)
  }
})

module.exports = blogsRouter