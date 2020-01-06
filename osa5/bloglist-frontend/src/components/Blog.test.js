import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

const blog = {
  title: 'blog title',
  author: 'author',
  url: 'blog url',
  likes: 10,
  user: {
    name: 'testuser'
  }
}

test('should only render title and author when collapsed', () => {
  const onLikeMock = jest.fn()
  const onRemoveBlogMock = jest.fn()
  const { getByText, queryByText } = render(
    <Blog onLike={onLikeMock} blog={blog} onRemoveBlog={onRemoveBlogMock} isBlogMaker={true} />
  )

  expect(getByText('blog title author')).toBeDefined()
  expect(queryByText('blog url')).toBeNull()
  expect(queryByText('10 likes')).toBeNull()
  expect(queryByText('added by testuser')).toBeNull()
})

test('should render everything with remove button when blogMaker is true', () => {
  const onLikeMock = jest.fn()
  const onRemoveBlogMock = jest.fn()
  const { getByText } = render(
    <Blog onLike={onLikeMock} blog={blog} onRemoveBlog={onRemoveBlogMock} isBlogMaker={true} />
  )

  fireEvent.click(getByText('blog title author'))

  expect(getByText('blog title author')).toBeDefined()
  expect(getByText('blog url')).toBeDefined()
  expect(getByText('10 likes')).toBeDefined()
  expect(getByText('added by testuser')).toBeDefined()
  expect(getByText('Remove')).toBeDefined()
})

test('should render everything without remove button when blogMaker is false', () => {
  const onLikeMock = jest.fn()
  const onRemoveBlogMock = jest.fn()
  const { getByText, queryByText } = render(
    <Blog onLike={onLikeMock} blog={blog} onRemoveBlog={onRemoveBlogMock} isBlogMaker={false} />
  )

  fireEvent.click(getByText('blog title author'))

  expect(getByText('blog title author')).toBeDefined()
  expect(getByText('blog url')).toBeDefined()
  expect(getByText('10 likes')).toBeDefined()
  expect(getByText('added by testuser')).toBeDefined()
  expect(queryByText('Remove')).toBeNull()
})