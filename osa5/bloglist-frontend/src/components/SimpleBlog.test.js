import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

const simpleBlog = {
  title: 'simple blog title',
  author: 'author',
  url: 'simple blog url',
  likes: 10,
}

test('should render title with correct text', () => {
  const onClickMock = jest.fn()
  const { getByText } = render(
    <SimpleBlog onClick={onClickMock} blog={simpleBlog} />
  )

  expect(getByText('simple blog title author')).toBeDefined()
})

test('should render likes with correct amount', () => {
  const onClickMock = jest.fn()
  const { getByText } = render(
    <SimpleBlog onClick={onClickMock} blog={simpleBlog} />
  )

  expect(getByText('blog has 10 likes')).toBeDefined()
})

test('should call onClickMock twice if pressed twice', () => {
  const onClickMock = jest.fn()
  const { getByText } = render(
    <SimpleBlog onClick={onClickMock} blog={simpleBlog} />
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(onClickMock.mock.calls.length).toBe(2)
})