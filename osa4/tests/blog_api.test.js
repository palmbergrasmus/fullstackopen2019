const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')
const { initialBlogs, blogsInDb } = require('./test_helper')

describe('when there is initially some blogs saved', () => {

  beforeEach(async () => {
    await Blog.deleteMany({})

    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()

    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()
  })

  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body.length).toBe(initialBlogs.length)
  })

  test('every blog has an id, not _id', async () => {
    const response = await api.get('/api/blogs')

    response.body.forEach(blog => {
      expect(blog._id).not.toBeDefined()
      expect(blog.id).toBeDefined()
    })
  })

  describe('succesful addition of a new blog', () => {
    test('a valid blog can be added ', async () => {
      const newBlog = {
        title: 'testtitle3',
        author: 'testauthor3',
        url: 'someurl3',
        likes: 32
      }

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)

      const blogsAtEnd = await blogsInDb()
      const titles = blogsAtEnd.map(blog => blog.title)

      expect(blogsAtEnd.length).toBe(initialBlogs.length + 1)
      expect(titles).toContain('testtitle3')
    })

    test('newBlog will be added with 0 likes if likes not defined', async () => {
      const newBlog = {
        title: 'testtitle3',
        author: 'testauthor3',
        url: 'someurl3'
      }

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)

      const blogsAtEnd = await blogsInDb()

      expect(blogsAtEnd.length).toBe(initialBlogs.length + 1)
      expect(blogsAtEnd[initialBlogs.length].likes).toBe(0)
    })
  })

  describe('failed addition of a new blog', () => {
    test('response with 400 Bad request if title not given', async () => {
      const newBlog = {
        author: 'testauthor3',
        url: 'someurl3',
        likes: 10
      }

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
    })

    test('response with 400 Bad request if url not given', async () => {
      const newBlog = {
        title: 'testtitle3',
        author: 'testauthor3',
        likes: 10
      }

      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
    })
  })
})


afterAll(() => {
  mongoose.connection.close()
})