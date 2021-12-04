import { getBenefitList, getByCategory, getById } from "./db.js";

const resolvers = {
  Query: {
    benefits: () => getBenefitList(),
    getById: (_, { id }) => getById(id),
    getByCategory: (_, { category }) => getByCategory(category),
  },
};

export default resolvers;
