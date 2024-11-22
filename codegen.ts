import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: process.env.NEXT_PUBLIC_APP_HASURA_ENDPOINT,
  documents: "src/**/*.graphql.ts",
  generates: {
    "src/graphql/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
  },
};
