import { gql } from '@apollo/client'

const UserLogin = gql`
mutation UserLogin($username: String!, $password: String!) {
  UserLogin (
    username: $username
    password: $password
  )
   {
    token
    refreshToken
  }
}
`

export { UserLogin }
