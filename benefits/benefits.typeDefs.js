import { gql } from "apollo-server";

const typeDefs = gql`
  type Benefit {
    id: Int!
    name: String!
    category: String!
    location: String!
    address: String!
    summary: [String!]
    thumbnail: String!
    mainBenefit: String!
    benefits: [String!]
    conditions: [String!]
    othersOpts: [String!]
    dtlImgs: [String!]
    dtlLink: String!
    contactNb: String!
    period: String!
  }

  type Query {
    benefits: [Benefit]!
    getById(id: Int!): Benefit
    getByCategory(category: String!): [Benefit]!
    getByCategoryLocation(category: String!, location: String!): [Benefit]!
  }

  query getCategory {
    benefits(category: "문화") {
      id
      name
    }
  }
`;

export default typeDefs;
