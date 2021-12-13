import {
  getBenefitList,
  getByCategory,
  getByCategoryLocation,
  getById,
} from "./db.js";

const resolvers = {
  Query: {
    benefits: () => getBenefitList(),
    getById: (_, { id }) => getById(id),
    getByCategory: (_, { category }) => getByCategory(category),
    getByCategoryLocation: (_, { category, location }) =>
      getByCategoryLocation(category, location),
  },
};

export default resolvers;
