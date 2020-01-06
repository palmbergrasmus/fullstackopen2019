const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: 'testtitle1',
    author: 'testauthor1',
    url: 'someurl1',
    likes: 69
  },
  {
    title: 'testtitle2',
    author: 'testauthor2',
    url: 'someurl2',
    likes: 420
  },
]

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  blogsInDb,
  initialBlogs,
  usersInDb
}