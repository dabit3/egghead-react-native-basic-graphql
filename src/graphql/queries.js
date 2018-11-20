// eslint-disable
// this is an auto generated file. This will be overwritten

export const getBook = `query GetBook($id: ID!) {
  getBook(id: $id) {
    id
    name
    description
    completed
  }
}
`;
export const listBooks = `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      completed
    }
    nextToken
  }
}
`;
