// import { createContext, useContext, useEffect, useState } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { useApolloClient } from '@apollo/client';

// const AuthContext = createContext<{
//   user: any;
//   loading: boolean;
// }>({
//   user: null,
//   loading: true,
// });

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const client = useApolloClient();

//   useEffect(() => {
//     const auth = getAuth();
//     return onAuthStateChanged(auth, async (user) => {
//       setUser(user);
//       setLoading(false);
//       if (!user) {
//         await client.resetStore();
//       }
//     });
//   }, [client]);

//   return (
//     <AuthContext.Provider value={{ user, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };