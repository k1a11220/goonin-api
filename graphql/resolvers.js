import { getBenefitList, getByCategory, getById } from "./db.js";

const resolvers = {
  Query: {
    benefits(args) {
      const { category } = args;
      return getBenefitList().filter((a) => a.category == category);
    },
    getById: (_, { id }) => getById(id),
    getByCategory: (_, { category }) => getByCategory(category),
  },
};

export default resolvers;
