import { rest } from 'msw'
import { server } from '../../mocks/server'

test('fetches user successfully', async () => {
  const response = await fetch('/api/user')
  const data = await response.json()

  expect(data).toEqual({ id: '1', name: 'John Doe' })
})

test('handles server error', async () => {
  server.use(
    rest.get('/api/user', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  )

  await expect(fetch('/api/user')).rejects.toThrow()
})

