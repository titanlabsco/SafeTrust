// src/config/apollo.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: "http://localhost:8080/v1/graphql", // Asegúrate de que esta variable esté configurada en tu .env
});

// Si no necesitas un encabezado adicional, elimina el uso de `setContext`.
export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
