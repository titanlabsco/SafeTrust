'use client';
import { HttpLink, ApolloLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';
import { setContext } from '@apollo/client/link/context';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './firebase';

const auth = getAuth(app);

let firebaseReady = false;

async function ensureFirebaseInitialized() {
  if (firebaseReady) return;

  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, () => {
      firebaseReady = true;
      resolve(null);
      unsubscribe();
    });
  });
}

async function getToken() {
  await ensureFirebaseInitialized();

  const user = auth.currentUser;
  return user ? await user.getIdToken() : null;
}

function makeClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_APP_HASURA_ENDPOINT,
    fetchOptions: { cache: 'no-store' },
  });

  const authLink = setContext(async (_, { headers }) => {
    const token = await getToken();
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([authLink, httpLink]),
  });
}

export default makeClient;
