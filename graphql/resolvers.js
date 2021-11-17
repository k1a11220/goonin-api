import { getBenefitList } from "./db.js";

const resolvers = {
  Query: {
    benefits: () => getBenefitList(),
  },
};

export default resolvers;
