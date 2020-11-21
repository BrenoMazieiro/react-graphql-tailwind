import { gql } from '@apollo/client'

const RefreshUserToken = gql`
mutation RefreshUserToken($refreshToken: String!){
  RefreshUserToken
  (
    refreshToken: $refreshToken
  )
  {
    token
    refreshToken
  }
}
`

export { RefreshUserToken }
