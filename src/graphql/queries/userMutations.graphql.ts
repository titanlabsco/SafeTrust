import { gql } from '@apollo/client';

export const ASSIGN_TENANT_ROLE = gql`
  mutation AssignTenantRole($userId: String!) {
    insert_user_roles_one(object: { user_id: $userId, role_id: 2 }) {
      user_id
      role {
        name
      }
    }
  }
`;

export const CREATE_USER_RECORD = gql`
  mutation CreateUserRecord($user: users_insert_input!) {
    insert_users_one(object: $user) {
      id
      email
      last_seen
    }
  }
`;
