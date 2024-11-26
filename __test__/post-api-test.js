import { graphql } from 'msw'
import { server } from '../mocks/server'

test('fetches posts successfully', async () => {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query ListPosts {
          posts {
            id
            title
            content
          }
        }
      `,
    }),
  })
  const { data } = await response.json()

  expect(data.posts).toHaveLength(2)
  expect(data.posts[0]).toEqual({ id: '1', title: 'First Post', content: 'This is the first post' })
})

test('handles create post mutation', async () => {
  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        mutation CreatePost($title: String!, $content: String!) {
          createPost(title: $title, content: $content) {
            id
            title
            content
          }
        }
      `,
      variables: {
        title: 'New Post',
        content: 'This is a new post',
      },
    }),
  })
  const { data } = await response.json()

  expect(data.createPost).toEqual({ id: '3', title: 'New Post', content: 'This is a new post' })
})

test('handles server error', async () => {
  server.use(
    graphql.query('ListPosts', () => {
      return {
        errors: [{ message: 'Failed to fetch posts' }],
      }
    })
  )

  const response = await fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query ListPosts {
          posts {
            id
            title
            content
          }
        }
      `,
    }),
  })
  const { errors } = await response.json()

  expect(errors[0].message).toBe('Failed to fetch posts')
})

