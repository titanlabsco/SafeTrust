"use client";

import React from "react";
import { useGetUsersQuery } from "../graphql/generated/graphql";

const Users = () => {
  const { data, loading, error } = useGetUsersQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <p style={{ color: "black" }}>Prueba</p>
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>
            <p style={{ color: "black" }}>User ID: {user.id}</p>
            <p style={{ color: "black" }}>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
