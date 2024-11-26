import { graphql } from "msw";

// export const handlers = [
//   graphql.query('GetUsers', (req, res, ctx) => {
//     return res(
//       ctx.data({
//         users: [
//           { id: '1', name: 'John Doe' },
//           { id: '2', name: 'Jane Smith' },
//         ],
//       })
//     )
//   }),
// ]
export const handlers = [
  graphql.query("ListPosts", ({ query }) => {
    console.log('Intercepted a "ListPosts" GraphQL query:', query);
  }),
  graphql.mutation("CreatePost", ({ query, variables }) => {
    console.log(
      'Intercepted a "CreatePost" GraphQL mutation:',
      query,
      variables,
    );
  }),
  graphql.mutation("DeletePost", ({ query, variables }) => {
    console.log(
      'Intercepted a "DeletePost" GraphQL mutation',
      query,
      variables,
    );
  }),
];
