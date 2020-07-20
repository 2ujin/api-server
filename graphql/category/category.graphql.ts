export const typeDef = `
type Query {
  select_category: [Category]!
}

type Category {
  category_idx: Int!
  category_name: String!
}
`