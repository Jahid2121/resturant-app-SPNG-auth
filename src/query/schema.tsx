import { gql } from "@apollo/client";

export const GET_MEAL = gql`
query mealsQuery {
  meals {
    data {
      id
      attributes {
        title
        description
        image {
          data {
            attributes {
              formats: url
            }
          }
        }
      }
    }
  }
}
`