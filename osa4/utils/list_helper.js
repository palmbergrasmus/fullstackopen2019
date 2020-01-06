const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  let result = 0
  blogs.length === 0 ? null : blogs.forEach(blog => result += blog.likes)
  return result
}

const favoriteBlog = (blogs) => {
  let favorite = undefined
  blogs.length > 0 ? blogs.forEach(blog => !favorite ? favorite = blog : blog.likes > favorite.likes ? favorite = blog : null) : null
  return favorite
}

const mostBlogs = (blogs) => {

  const authors = []

  blogs.forEach(blog => {
    const authorFound = authors.find(element => element.author === blog.author)

    !authorFound ? authors.push({ author: blog.author, blogs: 1 }) : authorFound.blogs += 1
  })

  let mostBlogs = undefined
  authors.length > 0 ? authors.forEach(author => !mostBlogs ? mostBlogs = author : author.blogs > mostBlogs.blogs ? mostBlogs = author : null) : null

  return mostBlogs
}

const mostLikes = (blogs) => {

  const authors = []

  blogs.forEach(blog => {
    const authorFound = authors.find(element => element.author === blog.author)

    !authorFound ? authors.push({ author: blog.author, likes: blog.likes }) : authorFound.likes += blog.likes
  })

  let mostLikes = undefined
  authors.length > 0 ? authors.forEach(author => !mostLikes ? mostLikes = author : author.likes > mostLikes.likes ? mostLikes = author : null) : null

  return mostLikes
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}
