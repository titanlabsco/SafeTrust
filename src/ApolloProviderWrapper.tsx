"use client";

import { HttpLink, ApolloLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { setContext } from "@apollo/client/link/context";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9UxuAySLw2ybJHY7xyHGsHvWbRjM9VgY",
  authDomain: "safetrust-a7b44.firebaseapp.com",
  projectId: "safetrust-a7b44",
  storageBucket: "safetrust-a7b44.firebasestorage.app",
  messagingSenderId: "111834678669",
  appId: "1:111834678669:web:69a7e57b274414191229c4",
  measurementId: "G-BZQDER08VM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Función para obtener el token de Firebase
async function getToken() {
  const user = auth.currentUser;
  return user ? await user.getIdToken() : null;
}

function makeClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:8080/v1/graphql",
    fetchOptions: { cache: "no-store" },
  });

  // Configurar `authLink` para agregar el token de Firebase al encabezado
  const authLink = setContext(async (_, { headers }) => {
    const token = await getToken();
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([authLink, httpLink]),
  });
}

// Proveedor de Apollo para envolver la aplicación
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
