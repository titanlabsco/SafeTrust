import { graphql, HttpResponse } from 'msw'

export const handlers = [
  graphql.query('GetUsers', (req, res, ctx) => {
    return res(
      ctx.data({
        users: [
          { id: '1', name: 'John Doe' },
          { id: '2', name: 'Jane Smith' },
        ],
      })
    )
  }),
]

